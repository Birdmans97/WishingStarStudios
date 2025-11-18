#!/bin/sh
set -e

# Check if server.js exists in root (Dockerfile scenario)
if [ -f server.js ]; then
  exec node server.js
# Check if server.js exists in standalone directory (Coolify auto-build scenario)
elif [ -f .next/standalone/server.js ]; then
  exec node .next/standalone/server.js
else
  echo "ERROR: server.js not found in either location!"
  echo "Current directory: $(pwd)"
  echo "Files in current directory:"
  ls -la
  echo "Files in .next/standalone (if exists):"
  ls -la .next/standalone/ 2>/dev/null || echo ".next/standalone does not exist"
  exit 1
fi

