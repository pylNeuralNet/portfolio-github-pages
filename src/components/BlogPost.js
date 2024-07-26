import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import blogPosts from '../classes/blog-posts/index';
import './BlogPost.css'

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find(post => post.slug === slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div className="blog-post">
      <button onClick={handleGoBack} className="back-button">../</button>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
};

export default BlogPost;