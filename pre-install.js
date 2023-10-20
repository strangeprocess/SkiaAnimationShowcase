// This is a file called "pre-install.js" in the root of the project

if (process.env.EAS_BUILD_PLATFORM === 'android') {
    console.log('Run commands for Android builds here');
  } else if (process.env.EAS_BUILD_PLATFORM === 'ios') {
    console.log('Run commands for iOS builds here');
  }
  