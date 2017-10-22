angular
  .module('app')
  .component('trackFormComponent', {
    templateUrl: '/src/components/trackForm/trackFormView.html',
    bindings: {
        track: '<'
    },
    controller: trackFormComponentController
  })
;

function trackFormComponentController() {

  var vm = this;
  vm.$onInit = onInit;

  function onInit() {

  }
}