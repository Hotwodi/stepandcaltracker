# Clean up any conflicting files
Remove-Item -Path "app.json" -ErrorAction SilentlyContinue

# Install dependencies properly
npm install --legacy-peer-deps

# Run the build
npx eas-cli build --platform android --profile production
