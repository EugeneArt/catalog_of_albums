angular
  .module('app')
  .component('albumDetailsComponent', {
    templateUrl: '/src/components/albumDetails/albumDetailsView.html',
    bindings: {
        album: '<'
    },
    controller: albumDetailsComponentController
  })
;

function albumDetailsComponentController() {

  var vm = this;
  vm.$onInit = onInit;

  function onInit() {

  }

}