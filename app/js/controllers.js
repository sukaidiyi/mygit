'use strict';

/* Controllers */

var myApp = angular.module("myApp",[])

/* myApp.controller("myAppCtrl",function($scope){
	$scope.topic = {"title" : "1+1=?",
	"options" = [ {"content" : 2, "correct": "right"},
	{"content" : 3, "correct": "false"}
	]};
})*/

var options = [
	{"option" : "2", "correct" : "true"},
	{"option" : "3", "correct" : "false"}
];
myApp.controller("myAppCtrl",function($scope){
	$scope.topic = {"title":"1+1=?",
					"options" : options};
})