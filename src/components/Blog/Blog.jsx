import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Blog.css';
import axios from 'axios';
import parse from 'html-react-parser';

const Blog = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('https://growlotusfintech.in/growLotusMain/api/blogs');
        // Adjust this if the response data structure is different
        setBlogs(response.data); 
      } catch (err) {
        setError('Failed to fetch blogs');
        console.error(err); // Log error for debugging
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const sanitizeHtml = (htmlString) => {
    const domParser = new DOMParser();
    const doc = domParser.parseFromString(htmlString, 'text/html');
    const cleanHtml = doc.body.innerHTML;
    return cleanHtml;
  };

  const truncateDescription = (text, maxLength = 100) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
  };

  const onReadMore = (id) => {
    navigate(`/blog/${id}`);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  if (blogs.length === 0) return <div>No blogs available</div>;

  return (
    <div className="blog-container">
      {blogs.map((blog) => (
        <div key={blog.id} className="blog-card">
          <img src={`https://growlotusfintech.in/growadmin/storage/app/public/images/${blog.image}`} alt={blog.title} className="blog-image" />
          <div className="content">
            <div className="title">{truncateDescription(blog.title, 28)}</div>
            <p className="description">
              {parse(sanitizeHtml(blog.description))
              
              }
            </p>
          </div>
          <div className="content">
            <button
              onClick={() => onReadMore(blog.id)}
              className="read-more-button"
            >
              Read More
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
