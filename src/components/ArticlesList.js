import React from 'react';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

//for displaying different lists of articles
const ArticlesList = ({ articles }) => (
    <div style={{ height: "100vh" }} >
        <ListGroup>
            {articles.map((article, key) => (
                <ListGroupItem>
                    <div style={{
                        height: "10vh",
                        minHeight: "70px",
                        maxHeight: "500px"
                    }}>
                        <Link style={{ textDecoration: "none", color: "white" }} key={key} to={`/law/${article.Month}`} >
                            
                            <h4 className="article-list-item">{article.Month}</h4>
                        </Link>
                        <br/>
                        <h5>   Amount of fines: {article['Number of Fines']}</h5>
                    </div>
                </ListGroupItem>
            ))}
        </ListGroup>
    </div>
);

export default ArticlesList;
