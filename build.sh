#!/bin/bash
# Clean up any conflicting files
rm -f app.json

# Install dependencies properly
npm install --legacy-peer-deps

# Run the build
npx eas-cli build --platform android --profile production
