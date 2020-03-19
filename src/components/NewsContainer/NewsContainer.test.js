import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import { NewsContainer } from '../NewsContainer/NewsContainer';
import local from '../../data/local';


describe('NewsContainer', () => {
  it('renders a article card', () => {
    const { getByText } = render(<NewsContainer
        newsArticles={local}
      />)

      const articleHeadline = getByText('The Who postpones Denver Concert at the Pepsi Center');
      expect(articleHeadline).toBeInTheDocument();

  })
})
