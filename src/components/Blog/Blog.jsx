import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import './Blog.css';
import axios from 'axios';

import 'react-quill/dist/quill.snow.css'; // Import Quill's CSS for styling
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
        console.table(response.data);
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
        <Card sx={{ maxWidth: 345 }} style={{width:"300px"}}>
      <CardMedia
        sx={{ height: 180 }}
        image={`https://growlotusfintech.in/growadmin/storage/app/public/images/${blog.image}`}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {blog.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} >
        Counter It was 7 minutes after midnight. The dog was lying on the grass in the middle of the lawn in front of Mrs Shears’ house. Its eyes were closed. It looked as if it was running on its side,
        </Typography>
      </CardContent>
      <CardActions>
     
        <Button size="small" onClick={()=>{
             onReadMore(blog.id);
        }}>Learn More</Button>
      </CardActions>
    </Card>
      ))}
    </div>
  );
};

export default Blog;


