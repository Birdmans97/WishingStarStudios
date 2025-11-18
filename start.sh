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
  
  # Ensure static files are accessible to the standalone server
  # The standalone server.js needs .next/static relative to where it runs
  # Create symlink in standalone directory if static files exist in build root
  if [ -d .next/static ] && [ ! -d .next/standalone/.next ]; then
    echo "Creating .next directory in standalone for static files..."
    mkdir -p .next/standalone/.next
    # Create symlink to static files
    ln -sf ../../.next/static .next/standalone/.next/static || {
      echo "Symlink failed, copying static files..."
      cp -r .next/static .next/standalone/.next/static
    }
  fi
  
  # Ensure public directory is accessible
  if [ -d public ] && [ ! -d .next/standalone/public ]; then
    echo "Linking public directory to standalone..."
    ln -sf ../../public .next/standalone/public || {
      echo "Symlink failed, copying public directory..."
      cp -r public .next/standalone/public
    }
  fi
  
  # Change to standalone directory and run server
  # This ensures all paths are relative to where server.js expects them
  cd .next/standalone
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

