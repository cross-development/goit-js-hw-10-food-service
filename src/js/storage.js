'use strict';
import { Theme, refs } from './settings';

const currentTheme = localStorage.getItem('theme');

currentTheme === Theme.DARK
  ? ((refs.checkTheme.checked = true),
    refs.body.setAttribute('class', currentTheme))
  : refs.body.setAttribute('class', Theme.LIGHT);

refs.checkTheme.addEventListener('change', e => {
  const checkbox = e.currentTarget;

  checkbox.checked
    ? (refs.body.setAttribute('class', Theme.DARK),
      localStorage.setItem('theme', Theme.DARK))
    : (refs.body.setAttribute('class', Theme.LIGHT),
      localStorage.setItem('theme', Theme.LIGHT));
});
