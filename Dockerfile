# Use the official Node.js runtime as the base image
FROM node:20-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copy package files
COPY package.json package-lock.json* ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build the application
RUN npm run build

# Verify standalone output was created and check its structure
RUN ls -la /app/.next/standalone/ || (echo "Standalone output not found!" && exit 1)
RUN echo "=== Standalone structure ===" && find /app/.next/standalone -maxdepth 2 -type f -o -type d | head -20

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy the standalone output
# The standalone output includes server.js and node_modules at the root
# Note: standalone output may or may not include .next directory
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./

# Copy static files - these must be at .next/static relative to server.js
# COPY will create the .next directory if it doesn't exist
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Copy public folder - standalone mode needs this at public relative to server.js
# Only copy if public exists and isn't already in standalone
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

# Copy start script
COPY --from=builder --chown=nextjs:nodejs /app/start.sh ./start.sh

# Verify server.js exists and check final structure
RUN ls -la /app/server.js || (echo "ERROR: server.js not found in standalone output!" && ls -la /app/ && exit 1)
RUN echo "=== Final app structure ===" && ls -la /app/ | head -20
RUN echo "=== .next directory ===" && ls -la /app/.next/ 2>/dev/null || echo ".next not found"
RUN echo "=== .next/static ===" && ls -la /app/.next/static/ 2>/dev/null | head -10 || echo ".next/static not found"
RUN chmod +x /app/start.sh

USER nextjs

EXPOSE 3004

ENV PORT=3004
ENV HOSTNAME="0.0.0.0"
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Use start.sh which handles both Dockerfile and auto-build scenarios
CMD ["./start.sh"]

