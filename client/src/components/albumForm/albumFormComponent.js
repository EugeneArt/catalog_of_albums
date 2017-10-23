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

function albumFormComponentController(albumsEntity, ngDialog, $state, $stateParams, $scope) {

  var vm = this;
  vm.$onInit = onInit;
  vm.saveAlbum = saveAlbum;
  vm.addTrack = addTrack;
  vm.deleteTrack = deleteTrack;
  vm.closeDialog = closeDialog;

  function onInit() {
      vm.isNewAlbum = !vm.album;
      if(vm.isNewAlbum) {
          vm.album = new albumsEntity();
          vm.album.tracks = [];
      }
  }
  
  function addTrack() {
      vm.track = {};
      if(!vm.isNewAlbum) {
           vm.track.album = vm.album.id;
      }
      vm.album.tracks.push(vm.track);
  }
  
  function deleteTrack(index) {
       vm.album.tracks.splice(index, 1);
  }
  
  function saveAlbum() {
      vm.album.$save().then(success).catch(fail);
      
      function success() {
          ngDialog.closeAll();
          if(vm.isNewAlbum) {
              $state.go('.', $stateParams, {reload: true, inherit: true, notify: true});
          }
      }
      
      function fail(errors) {
          console.log(errors);
      }
  }

  function closeDialog() {
      ngDialog.closeAll();
      $state.go('.', $stateParams, {reload: true, inherit: true, notify: true});
  }

}