import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import { Menu } from '../Menu/Menu'

describe('Menu', () => {
  it('renders the dom menu', () => {
    const fakeRun = jest.fn();

    const {debug, getByText} = render(<Menu changeNews={fakeRun} />);

    fireEvent.click(getByText('Local News'));
    fireEvent.click(getByText('Technology'));
    fireEvent.click(getByText('Entertainment'));
    fireEvent.click(getByText('Science'));
    fireEvent.click(getByText('Health'));

    expect(fakeRun).toBeCalled();
  })
})
