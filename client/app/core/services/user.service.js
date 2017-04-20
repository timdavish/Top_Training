/**
 * User Factory
 * @namespace Services
 */
(function() { // IIFE structure
    'use strict'; // Strict mode

    angular
        .module('app.core')
        .factory('user', user);

    user.$inject = ['$http'];

    /**
     * @namespace user
     * @desc Service factory for user
     * @memberof Services
     */
    function user($http) {
        var service = {
            getAll: getAll,
			getById: getById,
			getByEmail: getByEmail,
			create: create,
			update: update,
			remove: remove
        };

        return service;

        /* Functions */

        /**
         * @namespace getAll
         * @desc Gets all users
		 * @return {Promise} Resolved/rejected promise
         * @memberof Services.user
         */
        function getAll() {
			return $http.get('/users')
				.then(handleSuccess)
				.catch(handleError);
        }

		/**
         * @namespace getById
         * @desc Gets a user by id
		 * @param {String} id The id to search for
		 * @return {Promise} Resolved/rejected promise
         * @memberof Services.user
         */
        function getById(id) {
			return $http.get('/users/' + id)
				.then(handleSuccess)
				.catch(handleError);
        }

		/**
         * @namespace getByEmail
         * @desc Gets a user by email
		 * @param {String} email The email to search for
		 * @return {Promise} Resolved/rejected promise
         * @memberof Services.user
         */
        function getByEmail(email) {
			return $http.get('/users/getByEmail/' + email)
				.then(handleSuccess)
				.catch(handleError);
        }

		/**
         * @namespace create
         * @desc Gets a user by email
		 * @param {Object} user The data to create a user with
		 * @return {Promise} Resolved/rejected promise
         * @memberof Services.user
         */
        function create(user) {
			return $http.post('/users', user)
				.then(handleSuccess)
				.catch(handleError);
        }

		/**
         * @namespace update
         * @desc Gets a user by email
		 * @param {Object} user The data to update a user with
		 * @return {Promise} Resolved/rejected promise
         * @memberof Services.user
         */
        function update(user) {
			return $http.put('/users/' + user.id, user)
				.then(handleSuccess)
				.catch(handleError);
        }

		/**
         * @namespace delete
         * @desc Gets a user by email
		 * @param {Integer} id The id of user to delete
		 * @return {Promise} Resolved/rejected promise
         * @memberof Services.user
         */
        function remove(id) {
			return $http.delete('/users/' + id)
				.then(handleSuccess)
				.catch(handleError);
        }

		/* Private functions */

		/**
         * @namespace handleSuccess
         * @desc Saves the session token into local storage
		 * @param {Object} res The $http request result
		 * @return {Promise} Result data
         * @memberof Services.user
         */
		function handleSuccess(res) {
			return res.data;
		}

		/**
         * @namespace handleError
         * @desc Saves the session token into local storage
		 * @param {Object} error The $http request error
		 * @return {Promise} Error
         * @memberof Services.user
         */
		function handleError(error) {
			return error;
		}
    }
})();