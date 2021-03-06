/**
 * Controller for signup-client.html
 * @namespace Controllers
 */
(function() { // IIFE structure
    'use strict'; // Strict mode

    angular
        .module('user.authentication')
        .controller('SignUpClientController', SignUpClientController);

    SignUpClientController.$inject = ['$rootScope', '$state', 'authentication'];

    /**
     * @namespace SignUpClientController
     * @desc SignUpClient controller
     * @memberof Controllers
     */
    function SignUpClientController($rootScope, $state, authentication) {
        var vm = this;

        vm.emailFormat = "/[^@]+@[^@]+/";

        vm.signUpClient = signUpClient;

        /* Functions */

        /**
         * @name signUpClient
         * @desc Attempts to sign up a new client
         * @memberof Controllers.SignUpClientController
         */
        function signUpClient() {
            vm.user.usertype = "client";
            authentication.signUp(vm.user)
				.then(signUpClientSuccess)
				.catch(signUpClientFail);

			/* Functions */

			function signUpClientSuccess() {
				// If we have return state
                if ($rootScope.returnState && $rootScope.returnStateParams) {
                    // Go to return state
                    $state.go($rootScope.returnState.name, $rootScope.returnStateParams);

                    // Reset return state and its params
                    $rootScope.returnToState = null;
                    $rootScope.returnToStateParams = null;
                // Otherwise just go home
                } else {
                    $state.go('home');
                }
			}

			function signUpClientFail(error) {
				vm.error = error;
			}
        }
    }
})();
