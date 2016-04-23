
app.config(['$routeProvider', function($routeProvider) {

    $routeProvider
      .when('/openchart', {
          templateUrl: 'assets/templates/openchart.html',
          controller: 'opengraphCtrl'
      })

      .otherwise({
          redirectTo: 'openchart'
      });
}]);