/**
 * Created by vinamilk26 on 06/08/2017.
 */
var app = angular.module("myobject", []);
app.controller("content", function ($scope, $http) {
    $http.get("types.json").then(function (response) {
        $scope.objects = response.data.object;
        function typevarialble(x) {
            if(Object.prototype.toString.call(x) === '[object Array]') {
                return 'array'
            } else {
                return typeof x;
            }
        }
        // console.log(typevarialble(Object.keys($scope.objects[0])[0]));
        var keyobj = (Object.keys($scope.objects[0]));
        // var outobj={};
        // outobj.key='';
        var i = 0;
        while (i < keyobj.length)
        {
            var key = keyobj[i];
            var value = typevarialble($scope.objects[0][key]);
            document.getElementById("listtype").innerHTML += key + ': ' +value +'<br>';
            console.log(key + ': ' +value);
            if (value == "object") {
                var subkeyobj = (Object.keys($scope.objects[0][key]));
                var j = 0;
                while (j < subkeyobj.length) {
                    var subkey = subkeyobj[j];
                    var subvalue = typevarialble($scope.objects[0][key][subkey]);
                    j ++;
                    document.getElementById("listtype").innerHTML += key + '{' + subkey + '}' + ":" + subvalue +'<br>';
                    console.log( key + '{' + subkey + ":" + subvalue + '}');
                }
            }
            // outobj.key=value;
            i++;
        }

    });


});
