angular
  .module('app')
  .component('albumListComponent', {
    templateUrl: '/src/components/albumList/albumListView.html',
    bindings: {
        albums: '<'
    },
    controller: albumListComponentController
  })
;

function albumListComponentController() {

  var vm = this;
  vm.$onInit = onInit;

  function onInit() {

  }

}