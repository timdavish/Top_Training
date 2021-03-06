/**
 * user.authentication.routes.spec
 * @namespace Tests
 */

// Suite block
describe('Unit: user.authentication routes', function() {

	// Include modules before each describe or it in this block
	beforeEach(module('app'));

	// Suite block
	describe('State: login', function() {
		// Global variables inside this block
		var $state,
			$rootScope,
			$httpBackend,
			state = 'login';

		// Inject dependencies
		beforeEach(inject(function(_$state_, _$rootScope_, _$httpBackend_) {
			$state = _$state_;
			$rootScope = _$rootScope_;
			$httpBackend = _$httpBackend_;
		}));

		// Test
		it('should verify state config', function() {
			var config = $state.get(state);

			expect(config.url).toBeDefined();
			expect(config.wantToReturn).toBeFalsy();
			expect(config.requiresLoggedIn).toBeFalsy();
		});

		// Test
		it('should respond to URL', function() {
			expect($state.href(state)).toEqual('#/login');
		});
	});

	// Suite block
	describe('State: signup-client', function() {
		// Global variables inside this block
		var $state,
			$rootScope,
			state = 'signup-client';

		// Inject dependencies
		beforeEach(inject(function(_$state_, _$rootScope_) {
			$state = _$state_;
			$rootScope = _$rootScope_;
		}));

		// Test
		it('should verify state config', function() {
			var config = $state.get(state);

			expect(config.url).toBeDefined();
			expect(config.wantToReturn).toBeFalsy();
			expect(config.requiresLoggedIn).toBeFalsy();
		});

		// Test
		it('should respond to URL', function() {
			expect($state.href(state)).toEqual('#/signup-client');
		});
	});

	// Suite block
	describe('State: signup-trainer', function() {
		// Global variables inside this block
		var $state,
			$rootScope,
			state = 'signup-trainer';

		// Inject dependencies
		beforeEach(inject(function(_$state_, _$rootScope_) {
			$state = _$state_;
			$rootScope = _$rootScope_;
		}));

		// Test
		it('should verify state config', function() {
			var config = $state.get(state);

			expect(config.url).toBeDefined();
			expect(config.wantToReturn).toBeFalsy();
			expect(config.requiresLoggedIn).toBeFalsy();
		});

		// Test
		it('should respond to URL', function() {
			expect($state.href(state)).toEqual('#/signup-trainer');
		});
	});
});
