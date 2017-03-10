namespace database {

    angular.module('database', ['ui.router', 'ngResource', 'ui.bootstrap']).config((
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider
    ) => {
        // Define routes
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/ngApp/views/home.html',
                controller: database.Controllers.HomeController,
                controllerAs: 'controller'
            })
            .state('about', {
                url: '/about',
                templateUrl: '/ngApp/views/about.html',
                controller: database.Controllers.AboutController,
                controllerAs: 'controller'
            })
            .state('houses', {
              url: '/houses',
              templateUrl: '/ngApp/views/houses.html',
              controller: database.Controllers.HousesController,
              controllerAs: 'controller'
            })
            .state('house', {
              url: '/house/:id',
              templateUrl: '/ngApp/views/house.html',
              controller: database.Controllers.HouseController,
              controllerAs: 'controller'
            })
            .state('newHouse', {
              url: '/newHouse',
              templateUrl: '/ngApp/views/newHouse.html',
              controller: database.Controllers.NewHouseController,
              controllerAs: 'controller'
            })
            .state('updateHouse', {
              url: '/updateHouse/:id',
              templateUrl: '/ngApp/views/updateHouse.html',
              controller: database.Controllers.UpdateHouseController,
              controllerAs: 'controller'
            })
            .state('notFound', {
                url: '/notFound',
                templateUrl: '/ngApp/views/notFound.html'
            });

        // Handle request for non-existent route
        $urlRouterProvider.otherwise('/notFound');

        // Enable HTML5 navigation
        $locationProvider.html5Mode(true);
    });



}
