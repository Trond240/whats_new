import React from 'react';
import './NewsArticle.css';

// NEWSARTICLE COMPONENT CODE GOES HERE
const NewsArticle = (props) => {
  return (
    <article className='article-card' id={props.id}>
      <h1>{props.headline}</h1>
        <div className='image-div'>
          <img src={props.img} alt={props.headline}/>
        </div>
      <p>Description{props.description}</p>
    </article>
  )
};

export default NewsArticle;
