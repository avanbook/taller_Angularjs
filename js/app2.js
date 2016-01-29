

var app=angular.module("app2", ['ngRoute','tareasCtrl']);
  
app.config(function($routeProvider) {
        $routeProvider

            
            .when('/', {
                templateUrl : 'home.html',
                controller  : 'prueba'
            })

            
            .when('/tareas', {
                templateUrl : 'tareas.html',
                controller  : 'todo'
            })

            
    })
.controller("prueba",["$scope","getHoteles", function($scope,getHoteles) {
  $scope.mensaje="Taller Angular";

  $scope.modelojs =function(){
  	$scope.nombre ="Franco "
  	$scope.apellido ="Gasparini "
  }
  $scope.plata="251.2"

  getHoteles.listado().success(function(data){
  		$scope.hoteles=data;
  })
}])
//esto es un servicio
.factory("getHoteles",["$http", function($http){
	return {
		listado : function(){
		return $http({
        method: 'GET',
        url: 'http://sanrafaellate.com.ar/api/alojamientos/get/1' 

      });
		}
	}
}])

/**
 * Las directivas Extentiende el codigo HTML 
 * Directivas nativas de Angular 
 * ng-app - ng-controller , ng-click , ng-repeat
 */

//Directivas Personalizada
.directive('dirTemplate', function ()
{
return {
restrict: 'E',//<dir-template></dir-template> hace referencia a un elemento/etiqueta html
template: '<div class="dirClass"><h1>Esto es una Directiva</h1>' +
'<ul><li ng-repeat="value in values">{{value}}</li></ul></div>',
link: function ($scope,element)
{

//y creamos una variable de alcance con scope que contiene un array
$scope.values = ["item1","item2","item3","item4"];
}
};
})

/**
 * Filtros de Angular 
 * filtros nativos de angular : numbre , currency, limitTo, uppercase,lowercase, numbre ,date
 */
 .filter('toUpperCase', function() {
        return function(text, length, end) {
            if(text) {
                return text.toUpperCase();   
            }
        }
    });