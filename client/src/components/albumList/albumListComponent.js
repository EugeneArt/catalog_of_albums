angular
  .module('app')
  .component('albumListComponent', {
    templateUrl: '/src/components/albumList/albumListView.html',
    bindings: {
        albums: '<',
        admin: '@'
    },
    controller: albumListComponentController
  })
;

function albumListComponentController(ngDialog) {

  var vm = this;
  vm.$onInit = onInit;
  vm.deleteAlbum = deleteAlbum;
  vm.openAlbum = openAlbum;
  vm.updateAlbum = updateAlbum;
  vm.createAlbum = createAlbum;

  function onInit() {
    vm.isAdmin = vm.admin;
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
      showClose: false,
      data: {
        album: album
      }
    });
  }
  
  function updateAlbum(album) {
    ngDialog.open({
      template: '<album-form-component ' +
      'album="ngDialogData.album">' +
      '</album-form-component>',
      plain: true,
      className: 'ngdialog-theme-default ngdialog-theme__albumform',
      closeByEscape: true,
      showClose: false,
      data: {
        album: album
      }
    });
  }

  function createAlbum() {
    ngDialog.open({
      template: '<album-form-component ' +
      '</album-form-component>',
      plain: true,
      className: 'ngdialog-theme-default ngdialog-theme__albumform',
      closeByEscape: true,
      showClose: false
    });
  }

}