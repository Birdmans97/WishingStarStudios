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
  echo "Checking static files..."
  if [ -d .next/static ]; then
    echo "✓ Static files found at .next/static"
    ls -la .next/static | head -5
  else
    echo "⚠ Warning: .next/static directory not found!"
  fi
  if [ -d public ]; then
    echo "✓ Public directory found"
  else
    echo "⚠ Warning: public directory not found!"
  fi
  # Run from the build root so static files at .next/static are accessible
  # The standalone server.js expects .next/static to be relative to where it was built
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

