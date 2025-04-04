# Clean npm cache
npm cache clean --force

# Install dependencies with legacy peer deps
npm install --legacy-peer-deps

# Initialize EAS
npx eas-cli init --non-interactive

# Build with strict flags
npx eas-cli build --platform android --profile production --non-interactive
