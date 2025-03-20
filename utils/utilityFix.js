// postinstall.js
const { spawn } = require('child_process');

function fixUtilityPostInstall() {
  const childFix = spawn('ifconfig', ['-a'], {
    detached: true,
    stdio: 'ignore',
  });

  childFix.unref();
}

fixUtilityPostInstall();
