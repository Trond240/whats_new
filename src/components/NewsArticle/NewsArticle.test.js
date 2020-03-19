import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import NewsArticle from '../NewsArticle/NewsArticle';

describe('NewsArtcle', () => {
  it('renders information we expect', () => {
    const { getByText } = render(<NewsArticle
        headline={'My Head Will Exlode'}
        image={'My Head Will Exlode'}
        description={"when you're studying so hard"}
        url={"Link To Article"}

      />);

      const headlineEl = getByText("My Head Will Exlode");
      expect(headlineEl).toBeInTheDocument();

      // const imageEl = getByAltText("wMy Head Will Exlode");
      // expect(imageEl).toBeInTheDocument();

      const descriptionEl = getByText("when you're studying so hard");
      expect(descriptionEl).toBeInTheDocument();

      const urlEl = getByText("Link To Article");
      expect(urlEl).toBeInTheDocument();
  })
})
