(function () {
	'use strict';
	angular
		.module('app')
		.component('sidenav', {
		    templateUrl: 'app/components/sidenav/sidenav.html',
		    controller: SidenavComponent,
		    controllerAs: "vm"
		});

	SidenavComponent.$inject = ["$mdSidenav", "loginService", "$state"];

	function SidenavComponent($mdSidenav, loginService, $state) {
		var vm = this;

        vm.closeSidenav = closeSidenav;
        vm.logout = logout;

        vm.links = [{
            label: "Home",
            route: 'home',
        }, {
            label: "Experiences",
            route: 'admin.experiences',
        }, {
            label: "Types d'experiences",
            route: 'admin.experience-types'
        }, {
            label: "Compétences",
            route: 'admin.skills'
        }, {
            label: "Types de compétences",
            route: 'admin.skill-types'
        }];

        vm.$onInit = function() {
        };

        function closeSidenav() {
           $mdSidenav('sidenav').close();
        }

        function logout() {
            loginService.logout().then(function() {
                console.log("loggout");
                closeSidenav();
                $state.go('login');
            })
        }
	}
})();
