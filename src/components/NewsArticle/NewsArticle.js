import React from 'react';
import './NewsArticle.css';

// NEWSARTICLE COMPONENT CODE GOES HERE
const NewsArticle = (props) => {
  return (
    <article className='article-card' id={props.id}>
      <h1>{props.headline}</h1>
        <div className='image-div'>
          <img src={props.image} alt={props.headline}/>
        </div>
      <p>{props.description}</p>
      <footer className='footer-info'>
         <a className='url' href={props.url}>Link To Article</a>
       </footer>
    </article>
  )
};

export default NewsArticle;
