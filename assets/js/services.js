/**
* API
*/

var api_url = "http://localhost:3000/";

app.service('API', function($q, $http)
{
    var _this = this;

    // GET request
    this.get = function(url)
    {
        return this.request({
            method: 'GET',
            url: api_url + url,
        });
    }

    // PUT request
    this.PUT = function(url, data)
    {
        return this.request({
            method: 'PUT',
            url: api_url + url,
            data: $.param(data),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        });
    }

    // POST request
    this.post = function(url, data)
    {
        return this.request({
            method: 'POST',
            url: api_url + url,
            data: $.param(data),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        });
    }

    // DELETE request
    this.delete = function(url)
    {
        return this.request({
            method: 'DELETE',
            url: api_url + url,
        });
    }

    // Request
    this.request = function(config)
    {
        var deferred = $q.defer();
        _this.loader = true;

        $http(config).then(
          function(response)
          {
              _this.loader = false;

              console.log(config.url + " : " + response.data);
              console.log(response.data);

              deferred.resolve(response.data);
          },
          function(response)
          {
              _this.loader = false;

              deferred.reject(response.data);
          }
        );

        return deferred.promise;
    }

});