angular
  .module('app')
  .component('headerComponent', {
    templateUrl: '/src/components/header/headerView.html',
    bindings: {},
    require: {
      appComponent: '^appComponent'
    },
    controller: headerComponentsController
  })
;

function headerComponentsController() {

  var vm = this;
  vm.$onInit = onInit;

  function onInit() {

  }

}