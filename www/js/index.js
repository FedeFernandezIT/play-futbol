/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        // Inicializamos AngularJS
        this.initAngular();
        

        console.log('Received Event: ' + id);
        console.log(navigator.camera);
        //document.app.main.currentView = loginView;
    },

    // Inicializa AngularJS
    initAngular: initializeAngularJs
};


// Iniciamos AngularJS
function initializeAngularJs() {    
    
    angular
        .module('app', ['ngRoute'])
        .controller('MainController', MainController)
        .controller('LoginController', LoginController)
        .controller('DashboardController', DashboardController)
        .controller('MatchController', MatchController)
        .config(routing);
        ;

     function MainController() {
         var vm = this;
         vm.title = "Play Fútbol";
         vm.currentView = loginView;
         vm.loginView = loginView;
         vm.showView = showView;
         vm.dashboardView = dashboardView; 
     };
        
    function LoginController() {        
        var vm = this;
        vm.title = 'Inicie sesión de usuario'                
    };

    DashboardController.inject = ['nameApp'];
    function DashboardController(nameApp) {
        var vm = this;
        vm.nameApp = nameApp
         vm.showMatch = false;

        vm.showMatch = false;
        vm.currentMatch = null;
        
        vm.getMatches = fetchMatches;
        vm.goMatch =  viewMatch;

        function fetchMatches() {
            return matches;
        };

        function viewMatch (id) {
            console.log('init go');
            var current = matches[id];
            this.currentMatch = current;
            this.showMatch = true;
            console.log(current.title);
            console.log('finish go');
            return current;                
        };        
    };

    MatchController.$inject = ['match'];        
    function MatchController(match) {
        var vm  = this;           
        vm.match = match;
        
        vm.postGol = proccessGol;
        vm.postCard = proccessCard;
        vm.postRound = proccessRound;
        vm.postSnapshot = snapshot;
    };
    
    function routing($routeProvider) {
        $routeProvider
        .when('/main', {
            templateUrl: '../views/main.html',
            controller: 'MainController',
            controllerAs: 'vm',        
        })
        .when('/login', {
            templateUrl: '../views/login.html',
            controller: 'LoginController',
            controllerAs: 'vm',        
        })
        .when("/dashboard", {
            templateUrl: '../views/dashboard.html',
            controller: "DashboardController",
            controllerAs: 'vm'
        })
        .when("/match", {
            templateUrl: '../views/match.html',
            controller: "MatchController",
            controllerAs: 'vm'
        })
    };

    angular.bootstrap(document, ['app']);
    
}

// Views
var showView = {
    id: 'show'    
}

var loginView = {
    id: 'login',
    title: 'Play Fútbol'
}

var dashboardView = {
    id: 'dashboard'
}

var matchOne = {
    id: 'one', 
    title: 'River vs. Boca',
    info: 'Estadio: Monumental. Fecha: 28 de Octubre de 2017. Hora de inicio: 15:00 hs.' 
}

var matchTwo = {
    id: 'two', 
    title: 'Racing vs. Independiente',
    info: 'Estadio: Cilindro de Avellaneda. Fecha: 28 de Octubre de 2017. Hora de inicio: 19:00 hs.' 
}

var matches = [ matchOne, matchTwo];

function proccessGol(id) {
        
}

function showModal(id) {
    
}


function openCamera(selection) {    
    var srcType = Camera.PictureSourceType.CAMERA;
    var options = setOptions(srcType);
    //var func = createNewFileEntry;

    navigator.camera.getPicture(function cameraSuccess(imageUri) {

        displayImage(imageUri);
        // You may choose to copy the picture, save it somewhere, or upload.
        //func(imageUri);

    }, function cameraError(error) {
        console.debug("Unable to obtain picture: " + error, "app");

    }, options);
}

function setOptions(srcType) {
    var options = {
        // Some common settings are 20, 50, and 100
        quality: 50,
        destinationType: Camera.DestinationType.FILE_URI,
        // In this app, dynamically set the picture source, Camera or photo gallery
        sourceType: srcType,
        encodingType: Camera.EncodingType.JPEG,
        mediaType: Camera.MediaType.PICTURE,
        allowEdit: false,
        correctOrientation: true  //Corrects Android orientation quirks
    }
    return options;    
}

function displayImage(imgUri) {
    
        var elem = document.getElementById('imageFile');
        elem.src = imgUri;
    }

app.initialize();