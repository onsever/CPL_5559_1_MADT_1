# Movie Buff

## Installation

To start using the application, first clone the project:

```bash
git clone https://github.com/onsever/CPL_5559_1_MADT_1.git
```

After cloning the project, install the node packages:

```bash
yarn install
```

## Usage

To run React Native CLI project, please create two different terminal instances.

Inside the first terminal instance, run:

```bash
yarn start
```

Inside the second terminal instance, select which platform you want to run the application on. To run on iOS device:

First, install the Cocoapods dependencies by running this command:

```bash
npx pod-install
```

After you get successful message, you can run this command:

```bash
yarn ios
```

To run on Android device:

```bash
yarn android
```

## Errors and Problems

### Ruby Version

Sometimes, running the project can throw an error. If you are having a Ruby version problem, please check your current Ruby version on your device. By default, macOS comes with a different version (2.6.1) than this project requires. To check the Ruby version, open your Terminal on your Mac:

```bash
ruby -v
```

This project requires the Ruby version of 2.7.6. Please check the .ruby-version file.

You can use Ruby Version Manager:
[RVM](https://rvm.io/)

### Running on Android

If you are having any problems with running on Android, please follow these instructions:

```bash
cd android
./gradlew clean
npm cache clean --force
yarn cache clean
```

Make sure you check your SDK matches the SDK of the Android Emulator. You can view the SDK version inside android/settings.gradle.

```bash
buildscript {
    ext {
        buildToolsVersion = "33.0.0"
        minSdkVersion = 21
        compileSdkVersion = 33
        targetSdkVersion = 33

        // We use NDK 23 which has both M1 support and is the side-by-side NDK version from AGP.
        ndkVersion = "23.1.7779620"
    }
    repositories {
        google()
        mavenCentral()
    }
    dependencies {
        classpath("com.android.tools.build:gradle:7.3.1")
        classpath("com.facebook.react:react-native-gradle-plugin")
    }
}
```

Also, make sure you have Java installed.
