# wasteof.mobile
💸 A mobile app for the wasteof.money social network, written in React Native.

## Tech Stack
- [React 18.x](https://reactjs.org/)
- [React Native 0.70.x](https://reactnative.dev/)
- [Metro](https://facebook.github.io/metro/)
- [Paper 5.x](https://callstack.github.io/react-native-paper/)
- [Node.js 16.x](https://nodejs.org/)
- [NPM](https://npmjs.com)
- [Git](https://git-scm.com/)

## Development
### Setup
First, clone the repository, switch to the correct branch, and install your dependencies.
```bash
git clone https://github.com/micahlt/wasteof.mobile
cd wasteof.mobile
git checkout reactnative
npm install
```
Next, set up your Android environment.  There's some great documentation on this by the React Native team [here](https://reactnative.dev/docs/environment-setup).  Hopefully soon I'll set up a Docker image that will make this a lot easier!

### Connect a device or emulator
Connect your Android phone over [USB debugging](https://developer.android.com/studio/debug/dev-options#enable) or [wireless debugging](https://developer.android.com/studio/command-line/adb#connect-to-a-device-over-wi-fi-android-11+).  If you don't have a device you can use, you can [set up an emulator](https://developer.android.com/studio/run/emulator) in Android Studio.

### Run
```bash
npm run android
```
This will create an instance of Metro, the JavaScript bundler, and also start a Gradle process to build and install the app.  Ensure that Metro remains running or you won't be able to hot-reload your app.  
