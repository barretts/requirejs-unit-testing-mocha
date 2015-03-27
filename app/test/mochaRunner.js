// List of all test dependencies
require([
  'test/specs/basicTest.spec'
], function() {
  if (window.mochaPhantomJS) {
    mochaPhantomJS.run();
  } else {
    // Start mocha
    mocha.run();
  }
});
