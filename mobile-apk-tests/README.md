# TN EMIS Mobile APK Testing

## Setup

1. Install Java JDK 11+
2. Install Android Studio + SDK
3. Install Appium: `npm install -g appium`
4. Install driver: `appium driver install uiautomator2`
5. Set environment variables: `ANDROID_HOME`, `JAVA_HOME`
6. Place APK in `apps/` folder
7. Run `npm install` in this directory

## Run Tests

```bash
# Terminal 1: Start Appium
appium

# Terminal 2: Start emulator
emulator -avd Pixel_7_API_33

# Terminal 3: Run tests
npm test

# Run specific test
npm run test:login
npm run test:dashboard
```

## Finding Selectors

Use Appium Inspector to find element selectors:
- Download: https://github.com/appium/appium-inspector/releases
- Start Appium server
- Connect device/emulator
- Inspect elements
