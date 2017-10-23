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

function albumListComponentController(ngDialog) {

  var vm = this;
  vm.$onInit = onInit;
  vm.deleteAlbum = deleteAlbum;
  vm.openAlbum = openAlbum;

  function onInit() {

  }

  function deleteAlbum(album, $index) {
      vm.albums.splice($index, 1);
      album.$destroy();
  }
  
  function openAlbum(album) {
      ngDialog.open({
      template: '<album-list-item-component ' +
      'album="ngDialogData.album">' +
      '</album-list-item-component>',
      plain: true,
      className: 'ngdialog-theme-default',
      closeByEscape: true,
      data: {
        album: album
      }
    });
  }

}