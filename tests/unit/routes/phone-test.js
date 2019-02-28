import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | phone', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:phone');
    assert.ok(route);
  });
});
