import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import 'react-quill/dist/quill.snow.css'; // Import Quill's CSS for styling

const BlogPage = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`https://growlotusfintech.in/growLotusMain/api/blogs/${id}`);
        setBlog(response.data);
      } catch (err) {
        console.error('Failed to fetch blog:', err);
      }
    };

    fetchBlog();
  }, [id]);

  const sanitizeHtml = (htmlString) => {
    const domParser = new DOMParser();
    const doc = domParser.parseFromString(htmlString, 'text/html');
    return doc.body.innerHTML;
  };

  const sanitizedDescription = sanitizeHtml(blog.description || '');

  return (
    <div className="blog-details p-[30px] px-[85px]">
      <h2>{blog.title}</h2>
      <img 
        src={`https://growlotusfintech.in/growadmin/storage/app/public/images/${blog.image}`} 
        alt={blog.title} 
        style={{ width: '100%', maxHeight: '500px', objectFit: 'cover' }} 
      />
      <div dangerouslySetInnerHTML={{ __html: sanitizedDescription }}></div>
    </div>
  );
};

export default BlogPage;
