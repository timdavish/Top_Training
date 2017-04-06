/**
 * location Factory
 * @namespace Services
 */
(function() { // IIFE structure
    'use strict'; // Strict mode

    angular
        .module('app.core')
        .factory('location', location);

    location.$inject = ['$q', '$window'];

    /**
     * @namespace location
     * @desc Service factory for geolocation
     * @memberof Services
     */
    function location($q, $window) {
		var geocoder = null;

        var service = {
            getBrowserLocation: getBrowserLocation,
			reverseGeocode: reverseGeocode
        };

        return service;

        /* Functions */

        /**
         * @namespace getCurrentLocation
         * @desc Attempts to get the user's location from their browser
         * @return {promise} Promise with location object or error
         * @memberof Services.location
         */
        function getBrowserLocation() {
            var deferred = $q.defer();

            if (!$window.navigator.geolocation) {
                deferred.reject('Geolocation not supported.');
            } else {
                $window.navigator.geolocation.getCurrentPosition(
                    function(position) {
                        deferred.resolve(position);
                    },
                    function(error) {
                        deferred.reject(error);
                    });
            }

            return deferred.promise;
        }

		/**
         * @namespace reverseGeocode
         * @desc Turns a lat/long into a formatted address
		 * @param {double} lat Latitude of location to reverse geocode
		 * @param {double} long Longitude of location to reverse geocode
         * @return {promise} Promise with formatted address or error
         * @memberof Services.location
         */
        function reverseGeocode(lat, long) {
			var deferred = $q.defer();

			if (!geocoder) {
				console.log('geocoder created');
				geocoder = new google.maps.Geocoder();
			}

			var latlng = new google.maps.LatLng(lat, long);

			geocoder.geocode({ 'latLng': latlng }, function (results, status) {
				if (status === google.maps.GeocoderStatus.OK && results && results[1]) {
					console.log(results);
					deferred.resolve(results[1].formatted_address);
				} else {
					deferred.reject(status);
				}
			});

			return deferred.promise;
		}
    }
})();
