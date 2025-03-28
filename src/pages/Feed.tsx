
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Feed: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to the All category by default
    navigate('/feed/all');
  }, [navigate]);

  return null; // This component just redirects
};

export default Feed;
