import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from '../templates/components/form-custom';

export default Component.extend({
  layout,
  classNames: ['form-group', 'form-for-custom'],
  classNameBindings: ['propName'],
  label: null
});
