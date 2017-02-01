/**
 * eventService Factory
 * @namespace Factories
 */
(function() { // IIFE structure
    'use strict'; // Strict mode

    angular
        .module('app.core')
        .factory('eventService', eventService);

    eventService.$inject = ['$http', 'authService', 'userService'];

    /**
     * @namespace eventService
     * @desc Service factory for events
     * @memberof Factories
     */
    function eventService($http, authService, userService) {
        var service = {
            events: [],
            eventsBySport: [],
            addEvent: addEvent,
            getEvents: getEvents,
            getEventsBySport: getEventsBySport,
            getEvent: getEvent,
            signUpEvent: signUpEvent
        };

        return service;

        /* Functions */

        // Create a new event
        function addEvent(userId, event) {
            return $http.post('/events/addEvent/' + userId, event, {
                headers: { Authorization: 'Bearer ' + authService.getToken() }
            }).success(function(data) {
                service.events.push(data);
            });
        }

        // Get all events regardless of archived status (unsorted)
        function getEvents() {
            return $http.get('/events/getEvents').success(function(data) {
                // Translate JSON'd dates back to moment dates for the calendar's sake
                data.forEach(function(event) {
                    event.startsAt = new Date(event.startsAt);
                    event.endsAt = new Date(event.endsAt);
                });
                angular.copy(data, service.events);
            });
        }

        // Get all events grouped and sorted by sport
        function getEventsBySport() {
            return $http.get('/events/getEventsBySport').success(function(data) {
                // Translate JSON'd dates back to moment dates for the calendar's sake
                data.forEach(function(sport) {
                    sport.events.forEach(function(event) {
                        event.startsAt = new Date(event.startsAt);
                        event.endsAt = new Date(event.endsAt);
                    });
                });
                angular.copy(data, service.eventsBySport);
            });
        }

        // Get a single event by id
        function getEvent(eventId) {
            return $http.get('/events/getEvent/' + eventId).then(function(res) {
                // Translate JSON'd moment date into readable format
                res.data.startsAt = moment(res.data.startsAt).format('h:mm a, MMMM Do, YYYY');
                res.data.endsAt = moment(res.data.endsAt).format('h:mm a, MMMM Do, YYYY');
                return res.data;
            });
        }

        // Sign a student up for an event
        function signUpEvent(event) {
            var userId = userService.getUserId();
            return $http.put('/events/signUpEvent/' + event._id + '/' + userId, null, {
                headers: { Authorization: 'Bearer ' + authService.getToken() }
            });
        }
    }
})();
