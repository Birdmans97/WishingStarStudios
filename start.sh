#!/bin/sh
set -e

# Check if server.js exists in root (Dockerfile scenario)
if [ -f server.js ]; then
  echo "Starting server from root (Dockerfile scenario)..."
  exec node server.js
# Check if server.js exists in standalone directory (Coolify auto-build scenario)
elif [ -f .next/standalone/server.js ]; then
  echo "Starting server from standalone directory (Coolify auto-build scenario)..."
  echo "Current directory: $(pwd)"
  
  # Store build root for reference
  BUILD_ROOT=$(pwd)
  
  # Change to standalone directory first
  cd .next/standalone
  
  echo "Changed to standalone directory: $(pwd)"
  echo "Checking for static files..."
  
  # Ensure static files are accessible - standalone server expects .next/static relative to where it runs
  if [ -d "$BUILD_ROOT/.next/static" ] && [ ! -d .next/static ]; then
    echo "Copying static files to standalone directory..."
    mkdir -p .next
    # Copy static files (not symlink, as some containers don't support symlinks well)
    cp -r "$BUILD_ROOT/.next/static" .next/static
    echo "✓ Static files copied"
  elif [ -d .next/static ]; then
    echo "✓ Static files already in standalone directory"
  else
    echo "⚠ Warning: Static files not found!"
  fi
  
  # Ensure public directory is accessible
  if [ -d "$BUILD_ROOT/public" ] && [ ! -d public ]; then
    echo "Copying public directory to standalone..."
    cp -r "$BUILD_ROOT/public" public
    echo "✓ Public directory copied"
  elif [ -d public ]; then
    echo "✓ Public directory already in standalone directory"
  else
    echo "⚠ Warning: Public directory not found!"
  fi
  
  # Verify server.js exists
  if [ ! -f server.js ]; then
    echo "ERROR: server.js not found in standalone directory!"
    exit 1
  fi
  
  echo "Starting Next.js server..."
  echo "PORT environment variable: ${PORT:-3004}"
  echo "HOSTNAME environment variable: ${HOSTNAME:-0.0.0.0}"
  echo "NODE_ENV: ${NODE_ENV:-production}"
  
  # Ensure PORT is set (default to 3004 if not set)
  export PORT=${PORT:-3004}
  export HOSTNAME=${HOSTNAME:-0.0.0.0}
  
  # Run server from standalone directory
  exec node server.js
else
  echo "ERROR: server.js not found in either location!"
  echo "Current directory: $(pwd)"
  echo "Files in current directory:"
  ls -la
  echo "Files in .next/standalone (if exists):"
  ls -la .next/standalone/ 2>/dev/null || echo ".next/standalone does not exist"
  exit 1
fi

