angular
  .module('app')
  .component('albumFormComponent', {
    templateUrl: '/src/components/albumForm/albumFormView.html',
    bindings: {
        album: '<'
    },
    controller: albumFormComponentController
  })
;

function albumFormComponentController($stateParams, albumsEntity) {

  var vm = this;
  vm.$onInit = onInit;
  vm.saveAlbum = saveAlbum;

  function onInit() {
    vm.album = $stateParams.id? vm.album: new albumsEntity();
    console.log(vm.album);
  }
  
  function saveAlbum() {
      vm.album.tracks = [];
      vm.album.$save();
  }

}