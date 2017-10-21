angular
  .module('app')
  .component('albumListItemComponent', {
    templateUrl: '/src/components/albumListItem/albumListItemView.html',
    bindings: {
        album: '<'
    },
    controller: albumListItemComponentController
  })
;

function albumListItemComponentController() {

  var vm = this;
  vm.$onInit = onInit;
  vm.deleteAlbum = deleteAlbum;

  function onInit() {

  }
  
  function deleteAlbum() {
      vm.album.$destroy();
  }

}