import React from 'react';
import Counter from '../counter';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

test('header renders with correct test', () => {
  render(<Counter />);
  const headerEl = screen.getByTestId('header');

  expect(headerEl.textContent).toBe('My Counter');
});

test('counter initially starts with 0', () => {
  render(<Counter />);
  const counterEl = screen.getByTestId('counter');

  expect(counterEl.textContent).toBe('0');
});

test('input contains initial value of 1', () => {
  render(<Counter />);
  const inputEl = screen.getByTestId('input');

  expect(inputEl.value).toBe('1');
});

test('add button renders with + sign', () => {
  render(<Counter />);
  const addBtn = screen.getByTestId('add-btn');

  expect(addBtn.textContent).toBe('+');
});

test('subtract button renders with - sign', () => {
  render(<Counter />);
  const subtractBtn = screen.getByTestId('subtract-btn');

  expect(subtractBtn.textContent).toBe('-');
});
