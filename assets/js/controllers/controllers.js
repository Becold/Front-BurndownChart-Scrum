app.controller('appCtrl', function($scope) {

});

app.controller('opengraphCtrl', function($scope, API) {
    $scope.highchartsNG = {
        title: {
            text: 'Progression d\'un sprint'
        },
        options: {
            chart: {
                type: 'spline'
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

        series: [{
            name: 'Courbe idéal',
            data: [
                [Date.UTC(1970, 10, 25), 3],
                [Date.UTC(1971, 5, 23), 0]
            ]
        },
            {
                name: 'Sprint 1',
                data: [
                    [Date.UTC(1970, 10, 25), 0],
                    [Date.UTC(1970, 11, 6), 0.25],
                    [Date.UTC(1970, 11, 20), 1.41],
                    [Date.UTC(1970, 11, 25), 1.64],
                    [Date.UTC(1971, 0, 4), 1.6],
                    [Date.UTC(1971, 0, 17), 2.55],
                    [Date.UTC(1971, 0, 24), 2.62],
                    [Date.UTC(1971, 1, 4), 2.5],
                    [Date.UTC(1971, 1, 14), 2.42],
                    [Date.UTC(1971, 2, 6), 2.74],
                    [Date.UTC(1971, 2, 14), 2.62],
                    [Date.UTC(1971, 2, 24), 2.6],
                    [Date.UTC(1971, 3, 2), 2.81],
                    [Date.UTC(1971, 3, 12), 2.63],
                    [Date.UTC(1971, 3, 28), 2.77],
                    [Date.UTC(1971, 4, 5), 2.68],
                    [Date.UTC(1971, 4, 10), 2.56],
                    [Date.UTC(1971, 4, 15), 2.39],
                    [Date.UTC(1971, 4, 20), 2.3],
                    [Date.UTC(1971, 5, 5), 2],
                    [Date.UTC(1971, 5, 10), 1.85],
                    [Date.UTC(1971, 5, 15), 1.49],
                    [Date.UTC(1971, 5, 23), 1.08]
                ]
        }]
    };

    $scope.openChart = function(id) {

        API.get('sprint/' + id + '/getGraph').then(function(response) {
            $scope.highchartsNG.series.push({
                data: response.data // Todo api
            })
        })

    }

});