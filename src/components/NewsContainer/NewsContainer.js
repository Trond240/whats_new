import React from 'react';
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle'

// NEWSCONTAINER COMPONENT CODE GOES HERE

export const NewsContainer = (props) => {
 return (
    <section className='news-container'>
      {
        props.newsArticles.map(article => {
        return <NewsArticle
            headline={article.headline}
            image={article.img}
            description= {article.description}
            id={article.id}
            key={article.id}
          />
        })
      }
    </section>
  )
}
