// src/components/Post.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Post.css';

function Post() {
  const { id } = useParams();
  const [postContent, setPostContent] = useState('');

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`/content/blog-posts/${id}.html`);
        if (!response.ok) {
          throw new Error('Post not found');
        }
        const html = await response.text();
        setPostContent(html);
      } catch (error) {
        console.error('Error fetching post:', error);
        setPostContent('<p>Post not found.</p>');
      }
    };

    fetchPost();
  }, [id]);

  return (
    <div className="post">
      <div dangerouslySetInnerHTML={{ __html: postContent }} />
    </div>
  );
}

export default Post;