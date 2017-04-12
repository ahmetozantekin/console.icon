var test = require('tape');

require('../console.icon');

test('basic type test for one emoji', function (t) {
  t.plan(1);
  t.equal(typeof console.icon('beer'), 'undefined');
});

test('basic printing test for one emoji', function (t) {
  t.plan(1);
  t.equal(console.icon('beer'), '🍺');
});

test('printing test for multiple emojis', function (t) {
  t.plan(1);
  t.equal(console.icon('beer', 'beer', 'beer'), '🍺🍺🍺');
});