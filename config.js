var app = angular.module('myModule' );
app.config(function($routeProvider) { //$routeprovider is a dependency


$routeProvider

.when('/home', {
    controller: 'routeCtrl',  //when the user goes to the about page
    templateUrl: 'home.html'
})

  .when('/cats', {
      controller: 'routeCtrl',  //when the user goes to the about page
      templateUrl: 'cats.html'
  })

  .when('/dogs', {
    controller: 'routeCtrl',
    templateUrl: 'dogs.html'
  })

  .when('/horses', {
      controller: 'routeCtrl',  //when the user goes to the about page
      templateUrl: 'horses.html'
  })

  .when('/lions', {
    controller: 'routeCtrl',
    templateUrl: 'lions.html'
  })
  .otherwise({redirectTo: '/home'});

});
