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
  vm.deleteAlbum = deleteAlbum;

  function onInit() {

  }

  function deleteAlbum(album, $index) {
      vm.albums.splice($index, 1);
      album.$destroy();
  }

}