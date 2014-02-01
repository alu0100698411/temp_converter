var assert = chai.assert;

suite('temperature', function() {
    test('32F = 0C', function() {
        original.value = "32F";
        calculate();
        assert.deepEqual(converted.innerHTML, "0.0 Celsius");
    });
    test('45C = 113.0 Farenheit', function() {
        original.value = "45C";
        calculate();
        assert.deepEqual(converted.innerHTML, "113.0 Farenheit");
    });
    test('-98.572F = -72.5 Celsius', function() {
        original.value = "-98.572F";
        calculate();
        assert.deepEqual(converted.innerHTML, "-72.5 Celsius");
    });
	
    test('529.35c = 984.8 Farenheit', function() {
        original.value = "45C";
        calculate();
        assert.deepEqual(converted.innerHTML, "984.8 Farenheit");
    });
	
	test('458. = error', function() {
        original.value = "458.";
        calculate();
        assert.match(converted.innerHTML, /ERROR/);
    });
	
    test('5X = error', function() {
        original.value = "5X";
        calculate();
        assert.match(converted.innerHTML, /ERROR/);
    });
});