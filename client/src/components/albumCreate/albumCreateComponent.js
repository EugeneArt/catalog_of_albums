angular
  .module('app')
  .component('albumCreateComponent', {
    templateUrl: '/src/components/albumCreate/albumCreateView.html',
    bindings: {},
    controller: albumCreateComponentController
  })
;

function albumCreateComponentController() {

  var vm = this;
  vm.$onInit = onInit;

  function onInit() {

  }

}