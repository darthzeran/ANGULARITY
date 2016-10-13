angular.module('Convert', [])
.controller('MainCtrl', [
  '$scope',
  '$http',
  function($scope, $http){
    //$scope.posts = postFactory.posts;    
    //$scope.test = 'Hello world!';
    
    $scope.countries ={};
    console.log("im here");    

    $http.get('http://api.fixer.io/latest?base=ZAR')
    .then(function(res){
	    console.log(res);
	    //var a = res.data.rates;
	    $scope.countries = res.data.rates;
	    //$scope.toType= $scope.rates.INR;
	    //$scope.fromType = $scope.rates.USD;
	    //$scope.fromValue =1;
	    //$scope.forExConvert();
    });     

    $scope.setFrom = function(key, val){
    	$scope.from = key;
	$scope.fromType = val;	
    };
 
    $scope.setTo = function(key, val){
    	$scope.to = key;
	$scope.toType = val;	
    };
    
    $scope.convert = function() {
	$scope.toValue = $scope.fromValue * ($scope.toType * (1 / $scope.fromType));
	$scope.toValue = $scope.toValue; 
    };
  }
  
]);

