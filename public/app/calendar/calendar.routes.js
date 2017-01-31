/**
 * Calendar routes
 * @namespace Configurations
 */
(function() {
    'use strict';

    angular
        .module('app.calendar')
        .run(appRun);

    appRun.$inject = ['routerHelper'];

    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'calendar',
                config: {
                    url: '/calendar',
                    templateUrl: 'app/calendar/calendar.ejs',
                    controller: 'CalendarController',
                    controllerAs: 'vm',
                    title: 'Calendar',
                    resolve: {
                        eventPromise: ['eventService', function(eventService) {
                            return eventService.getEvents();
                        }]
                    }
                }
            }
        ];
    }
})();