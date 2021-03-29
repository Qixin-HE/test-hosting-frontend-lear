import React from 'react';
import { Link } from 'react-router-dom';

//for displaying different lists of articles
const ArticlesList = ({ articles }) => (
    <>
    {articles.map((article, key) => (
        <Link className="article-list-item" key={key} to={`/law/${article.name}`} >
        <h3>{article.title}</h3>
        <p>{article.content[0].substring(0,150)}...</p>
        </Link>
    ))}
    </>
);

export default ArticlesList;
