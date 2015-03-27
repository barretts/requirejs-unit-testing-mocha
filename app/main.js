define([
  'app',
  'sample'
],
function(app, sample) {
  app.start();

  sample.show(app.mainRegion);
});