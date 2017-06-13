'use strict';

const test = require('eater/runner').test;
const format = require(`${process.cwd()}/lib/template/format`);
const assert = require('power-assert');

test('format: {randomInt:id}', () => {
  const result = format({ id: '{randomInt:id}' }, { id: '1-10000' });
  assert(result.id >= 1);
  assert(result.id <= 10000);
});

test('format: {randomInt:id} but no range', () => {
  const result = format({ id: '{randomInt:id}' }, { id: 1 });
  // default value is over 1
  assert(result.id >= 0);
  assert(result.id <= 100);
});

test('format: {randomInt:id} but range 1000-100', () => {
  const result = format({ id: '{randomInt:id}' }, { id: '1000-100' });
  assert(result.id >= 0);
  assert(result.id <= 100);
});
