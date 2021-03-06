/**
 * user.profile.routes.spec
 * @namespace Tests
 */

// Suite block
describe('Unit: user.profile routes', function() {

	// Include modules before each describe or it in this block
	beforeEach(module('app'));

	// Suite block
	describe('State: trainer-profile', function() {
		// Global variables inside this block
		var $state,
			$rootScope,
			state = 'trainer-profile';

		// Inject dependencies
		beforeEach(inject(function(_$state_, _$rootScope_) {
			$state = _$state_;
			$rootScope = _$rootScope_;
		}));

		// Test
		it('should verify state config', function() {
			var config = $state.get(state);

			expect(config.url).toBeDefined();
			expect(config.wantToReturn).toBeTruthy();
			expect(config.requiresLoggedIn).toBeTruthy();
		});

		// Test
		it('should respond to URL', function() {
			expect($state.href(state)).toEqual('#/profile/trainer');
		});
	});
});
