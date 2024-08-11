import React, { useState, useEffect } from 'react';
import BlogList from '../components/BlogList';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    
    fetch('https://newsapi.org/v2/everything?q=lahore&apiKey=a1fbae1e4efe480fbbe587a7658211f7')
      .then(data => data.json())
      .then(data => {
        console.log(data.articles)
        setPosts(data.articles)
      })


  }, []);

  return (
    <div>
      <BlogList postes={posts} />
    </div>
  );
};

export default Home;
