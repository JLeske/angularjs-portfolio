'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('angularjsPortfolioApp'));

  var ctrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller) {
    ctrl = $controller('MainCtrl');
  }));

  it('should attach a list of works', function () {
    expect(ctrl.works.length).not.toBe(0);
  });
});
