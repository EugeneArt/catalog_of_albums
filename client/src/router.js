angular
  .module('app')
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/albums");
    $stateProvider
      .state('albums', {
        url: '/albums',
        permissions: false,
        module: false,
        template: '<app-component></app-component>',
        resolve: {
            albums: ['albumsEntity', function (albumsEntity) {
                return albumsEntity.fetchAll();
            }]
        }
      })
  });