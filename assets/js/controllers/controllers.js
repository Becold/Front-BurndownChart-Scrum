app.controller('appCtrl', function($scope) {

});

app.controller('opengraphCtrl', function($scope, API) {
    $scope.highchartsNG = {
        title: {
            text: 'Progression d\'un sprint'
        },
        options: {
            chart: {
                type: 'line'
            }
        },
        xAxis: {
            type: 'datetime',
            dateTimeLabelFormats: {
                month: '%e. %b',
                year: '%b'
            },
            title: {
                text: 'Date'
            }
        },
        yAxis: {
            title: {
                text: 'Somme des points'
            },
            min: 0
        },
        tooltip: {
            headerFormat: '<b>{series.name}</b><br>',
            pointFormat: '{point.x:%e. %b}: {point.y:.2f} m'
        },

        series: []
    };

    $scope.openChart = function(id) {

        API.get('sprint/' + id + '/getGraph').then(function(response) {

            $scope.highchartsNG.series = response.series;

        })

    }

});