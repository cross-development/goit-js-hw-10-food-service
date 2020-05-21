'use strict';

import createMenuItem from '../templates/menu-item-template.hbs';
import menuItems from '../json/menu.json';
import { refs } from './settings.js';

createMenuByItemTemplate(menuItems);

function createMenuByItemTemplate(menuItems) {
  const markup = menuItems.map(item => createMenuItem(item)).join('');
  refs.menu.insertAdjacentHTML('beforeend', markup);
}
