var app = angular.module("main",["ngRoute","controllers",'ui.bootstrap']);
  app.config(['$routeProvider',
    function($routeProvider) {
      $routeProvider.
        when('/home', {
          templateUrl: 'views/home.html',
          controller: 'HomeCtrl'
        }).
        when('/login', {
          templateUrl: 'views/login.html',
          controller: 'ListCtrl'
        }).
        when('/add', {
          templateUrl: 'partials/add.html',
          controller: 'AddCtrl'
        }).
        when('/todos/:todoId', {
          templateUrl: 'partials/detail.html',
          controller: 'DetailCtrl'
        }).
        otherwise({
          redirectTo: '/home'
        });
    }]);

    var module = angular.module("controllers",[])
    .controller("AppCtrl",function(){
        
    })
    .controller("HomeCtrl",function(){
        /*$scope.friends = [
            {name:'John', age:25, gender:'boy'},
            {name:'Jessie', age:30, gender:'girl'},
            {name:'Johanna', age:28, gender:'girl'},
            {name:'Joy', age:15, gender:'girl'},
            {name:'Mary', age:28, gender:'girl'}
        ];*/   
    //alert("dddddd");
          $.ajax({
              type: 'GET',
              dataType: 'json',          
              url: "http://localhost:8080/RestDiscographyEcommerce/api/admin/album/list",
              beforeSend: function (xhr) {
                  xhr.setRequestHeader('Authorization',
                          this.makeBaseAuth("admin", "password"));
              },
              success: function (data, textStatus, jqXHR) {
                  $('#imgprova').attr('src',data[0].imagebase64);
                  console.log(data);
              },
              error: function (jqXHR, textStatus, errorThrown) {
                  alert("Error " + textStatus + ", message:" + errorThrown);
              },
              complete: function () {

              },
              makeBaseAuth: function (user, pswd) {
                  var token = user + ':' + pswd;
                  var hash = "";
                  if (btoa) {
                      hash = btoa(token);
                  }
                  return "Basic " + hash;
              }
          });
    })
    .controller("ListCtrl",function(){
        
    })
    .controller("AddCtrl",function(){
        
    })
    .controller("DetailCtrl",function(){
        
    });
    
app.controller('CarouselDemoCtrl', function ($scope) {
    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    var slides = $scope.slides = [];
    var currIndex = 0;

    $scope.addSlide = function() {
      var newWidth = 600 + slides.length + 1;
      slides.push({
        image: 'http://lorempixel.com/'+ newWidth +'/300',
        text: ['Nice image','Awesome photograph','That is so cool','I love that'][slides.length % 4],
        id: currIndex++
      });
    };

    $scope.randomize = function() {
      var indexes = generateIndexesArray();
      assignNewIndexesToSlides(indexes);
    };

    for (var i = 0; i < 4; i++) {
      $scope.addSlide();
    }

    // Randomize logic below

    function assignNewIndexesToSlides(indexes) {
      for (var i = 0, l = slides.length; i < l; i++) {
        slides[i].id = indexes.pop();
      }
    }

    function generateIndexesArray() {
      var indexes = [];
      for (var i = 0; i < currIndex; ++i) {
        indexes[i] = i;
      }
      return shuffle(indexes);
    }

    // http://stackoverflow.com/questions/962802#962890
    function shuffle(array) {
      var tmp, current, top = array.length;

      if (top) {
        while (--top) {
          current = Math.floor(Math.random() * (top + 1));
          tmp = array[current];
          array[current] = array[top];
          array[top] = tmp;
        }
      }

      return array;
    }
  });
