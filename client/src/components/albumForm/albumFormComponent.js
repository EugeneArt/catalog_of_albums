angular
  .module('app')
  .component('albumFormComponent', {
    templateUrl: '/src/components/albumForm/albumFormView.html',
    bindings: {},
    controller: albumFormComponentController
  })
;

function albumFormComponentController($stateParams, albumsEntity) {

  var vm = this;
  vm.$onInit = onInit;

  function onInit() {
    if ($stateParams.id) {
        vm.album = albumsEntity.fetchOne($stateParams.id);
    } else {
        vm.album = new albumsEntity();
    }
  }

}