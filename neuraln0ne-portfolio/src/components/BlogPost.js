// src/components/BlogPost.js
import React from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';

const BlogPost = ({ content }) => {
  return <ReactMarkdown>{content}</ReactMarkdown>;
};

BlogPost.propTypes = {
  content: PropTypes.string.isRequired,
};

export default BlogPost;