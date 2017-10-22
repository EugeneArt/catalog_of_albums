angular
  .module('app')
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("app/albums");
    $stateProvider
        .state('app', {
            url: '/app',
            abstract: true,
            permissions: false,
            module: false,
            template: '<app-component></app-component>'
        })
        .state('app.albumList', {
            url: '/albums',
            permissions: false,
            module: false,
            views: {
                'content@app': {
                    template: '<album-list-component ' +
                                'albums="$resolve.albums">' +
                              '</album-list-component>'
                }
            },
            resolve: {
                albums: ['albumsEntity', function (albumsEntity) {
                    return albumsEntity.fetchAll();
                }]
            }
        })
        .state('app.albumForm', {
            url: '/albums/:id',
            permissions: false,
            module: false,
            views: {
                'content@app': {
                   template: '<album-form-component ' +
                                'album="$resolve.album">' +
                              '</album-form-component>'
                }
            },
            resolve: {
                album: ['$stateParams','albumsEntity', function ($stateParams,albumsEntity) {
                    return albumsEntity.fetchOne($stateParams.id);
                }]
            }
        })
  });