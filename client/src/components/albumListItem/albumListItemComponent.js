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

function albumListItemComponentController(ngDialog) {

  var vm = this;
  vm.$onInit = onInit;
  vm.closeDialog = closeDialog;

  function onInit() {

  }

  function closeDialog() {
      ngDialog.closeAll();
  }

}