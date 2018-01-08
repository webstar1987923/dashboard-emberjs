import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';


moduleForComponent('gd-shore-excurtions', 'Integration | Component | gd shore excurtions', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{gd-shore-excurtions}}`);

  assert.equal(this.$().text(), '');

  // Template block usage:
  this.render(hbs`
    {{#gd-shore-excurtions}}
      template block text
    {{/gd-shore-excurtions}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
