import React from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

function EntryDetails() {
  const { id } = useParams();
  const [content, setContent] = React.useState('');

  React.useEffect(() => {
    if (id === '3') {
      import('../content/blog-posts/about-me.md')
        .then(res => {
          fetch(res.default)
            .then(res => res.text())
            .then(text => setContent(text))
            .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
    }
  }, [id]);

  if (id === '3') {
    return (
      <div className="entry-details">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    );
  }

  // For other entries, display a placeholder
  return (
    <div className="entry-details">
      <h2>Entry Details</h2>
      <p>Details for entry with id: {id}</p>
    </div>
  );
}

export default EntryDetails;