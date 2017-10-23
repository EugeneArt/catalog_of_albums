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

function albumFormComponentController(albumsEntity, ngDialog) {

  var vm = this;
  vm.$onInit = onInit;
  vm.saveAlbum = saveAlbum;
  vm.addTrack = addTrack;
  vm.deleteTrack = deleteTrack;

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
      }
  }

}