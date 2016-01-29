(function(){

angular.module("tareasCtrl",[])
.controller("todo", tareas)


tareas.$injected =["$scope"]
function tareas($scope){

  	$scope.tareas =
  	[
  	{texto:"estudia angular",hecho:true},
  	{texto:"darle de comer al orador",hecho:false},
    {texto:"Asado entre possumus y acrux",hecho:false}
  	];

    debugger;
  	$scope.agregarTarea= function (){

  		$scope.tareas.push({texto:$scope.nuevaTarea, hecho:false});
  		$scope.nuevaTarea="";
  	};
  		$scope.restantes = function() {
  		cuenta=0;
  			angular.forEach($scope.tareas, function(tarea){
  				cuenta+=tarea.hecho ? 0:1;

  			});
  		return cuenta;
  	}

  	$scope.eliminar = function () {
  		var tareasViejas = $scope.tareas;
  		$scope.tareasV = tareasViejas;
		$scope.tareas=[];
  		angular.forEach(tareasViejas, function(tarea){
  				if (!tarea.hecho) {
            $scope.tareas.push(tarea)};

  			});
  	}
  
  }


})()