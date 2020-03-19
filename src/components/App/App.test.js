import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('App', () => {
  it('show different articles', () => {

    const { getByText } = render(<App />);

    fireEvent.click(getByText('Local News'));
    fireEvent.click(getByText('Technology'));
    fireEvent.click(getByText('Entertainment'));
    fireEvent.click(getByText('Science'));
    fireEvent.click(getByText('Health'));



    expect(fakeRun).toBeCalled();
  });
});
