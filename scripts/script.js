var app = angular.module("Demo",["ngRoute"])
                 .config(function($routeProvider){
                    $routeProvider
                    .when("/home",{
                    templateUrl:"templates/home.html",
                    controller:"homeController"
                    })
                    .when("/courses",{
                    templateUrl:"templates/courses.html",
                    controller:"courseController"
                    })
                    .when("/students",{
                    templateUrl:"templates/students.html",
                    controller:"studentsController"
                    })

                    })

                    .controller("homeController",function($scope){
                      $scope.message="Home Page";
                    })

                    .controller("courseController",function($scope){
                      $scope.courses=["c++","c","c#","java"];
                    })

                    .controller("studentsController",function($scope){
                      $scope.message="Student Page";
                    })
