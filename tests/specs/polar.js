describe("polar view tests", function () {

	var container;
	var view;
	var time = {
		hours: 1,
		minutes: 1,
		seconds: 1
	};

	beforeEach(function () {
		container = document.createElement('div');
		view = new clock.PolarView(container);
	});

	afterEach(function () {
		view.dispose();
		view = null;
		container = null;
	});

	it('create an instance', function() {
		expect(view).to.be.an(clock.PolarView);
	});

	it('has a dispose method', function() {
		expect(typeof view.dispose).to.eql('function');
	});

	it('has an update method', function() {
		expect(typeof view.update).to.eql('function');
	});

	it('can receive a time update', function() {
		view.update(time);
	});

	it('build a canvas', function() {
		expect(container.firstChild).to.be.an(HTMLCanvasElement);
	});

});
