import React from 'react';
import { render } from '@testing-library/react';
import ClockInOutPanel from './ClockInOutPanel';

test('renders text box and start button', () => {
  const { getByText } = render(<ClockInOutPanel />);

  expect(getByRole('button')).toHaveTextContent('start');
  expect(getByRole('input')).toBeInTheDOM();
});

test("start button switches to stop after filling in description and clicking button", () => {
  const { getByText } = render(<ClockInOutPanel />);

  expect(getByRole('button')).toHaveTextContent('start');

  fireEvent.click(getByText("Up"));  
  fireEvent.change(input, { target: { value: 'test description' } })

  expect(getByRole('button')).toHaveTextContent('stop');

  expect(getByText("test description")).toBeInTheDOM();
})