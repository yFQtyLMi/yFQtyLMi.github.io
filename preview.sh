#!/bin/bash

echo "Starting local preview server for Text-to-Speech Research Demo..."
echo "Open your browser and navigate to: http://localhost:8080"
echo "Press Ctrl+C to stop the server."

# Check if Python 3 is available
if command -v python3 &>/dev/null; then
    python3 -m http.server 8080
# Check if Python 2 is available
elif command -v python &>/dev/null; then
    python -m SimpleHTTPServer 8080
# If neither is available
else
    echo "Error: Python is not installed. Please install Python to use this preview script."
    exit 1
fi 