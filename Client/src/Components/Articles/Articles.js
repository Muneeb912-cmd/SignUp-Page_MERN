import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import styles from './Articles.module.css'

const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Fetch data from the server API
    axios.get('http://localhost:5000/get-articles')
      .then((response) => {
        setArticles(response.data);
      })
      .catch((error) => {
        console.error('Error fetching articles:', error);
      });
  }, []);

  return (
    <>
      <Link to="/article"></Link>
      <div className="Content">
        <h1 style={{ color: 'white' }}>Top Business News Articles</h1>
        <ul className={styles.articleList}>
          {articles.map((article) => (
            <li style={{ color: 'white' }} key={article.title}>
              <div className={styles.articleContainer}>
                <div className={styles.source}>{article.source}</div>
                <h1 className={styles.title}>{article.title}</h1>
                <p className={styles.description}>{article.description}</p>
                <img className={styles.image} src={article.urlToImage} alt="Article" />
                <p className={styles.published}>Published at: {article.publishedAt}</p>
                <div className={styles.content}>{article.content}</div>
                <a href={article.url} target="_blank" rel="noopener noreferrer">Read More</a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ArticleList;
