import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import { cars } from '../../assets/data.js';
import HomePage from '../../pages/HomePage.vue';

describe('HomePage', () => {
    it('displays all cars when filter is not applied', () => { 
      const wrapper = mount(HomePage, {
        data() {
          return {
            cars: cars,
            termSearch: '',
            controlFilter: false,
          };
        },
      });
  
      const carElements = wrapper.findAll('.car');
      expect(carElements).toHaveLength(cars.length);
    });
 
  });