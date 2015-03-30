/*
 * This file should be named sample.spec.js
 * General convention for test files is that they have the same name as the file
 * you are testing appended by an extra .spec extension.
 */

define([
  'jquery',
  'backbone',
  'marionette',
  'sample'
],
function ($, Backbone, Marionette, sample) {
  describe('basic tests', function() {
    before(function() {
      this.targetElementId = 'test-container';
    });

    beforeEach(function() {
      $('body').append('<div id="' + this.targetElementId + '"</div>');
      this.container = $('#' + this.targetElementId);
    });

    afterEach(function() {
      this.container.remove();
    });

    it('there should be a container', function() {
      this.container.length.should.equal(1);
    });

    it('sample controller should show', function() {
      var mgr = new Backbone.Marionette.Region({
        el: this.container
      });

      sample.show(mgr);

      $('div#sample').text().should.contain(' here');
    });

    it('stubbed show should return object w/ property stubbed true', function() {
      var mgr = new Backbone.Marionette.Region({
        el: this.container
      });

      var show = sinon.stub(sample, 'show').returns({stubbed:true})

      var isStubbed = sample.show();

      isStubbed.stubbed.should.equal(true);
    });
  });
});
