
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    /*
     *         - Clients
     */
      .when('/openChart', {
          templateUrl: 'assets/templates/openchart.html',
          controller: 'opengraphCtrl'
      })


      .otherwise({
          redirectTo: 'openChart'
      });
}]);