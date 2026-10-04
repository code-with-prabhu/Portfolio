import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { blogData } from '../data/blogData';
import Footer from '../components/common/Footer';

const BlogPost = () => {
  const { id } = useParams();
  
  // Find the specific blog post based on the URL parameter
  const blog = blogData.find(b => b.id === id);

  // If URL ID doesn't exist, redirect to 404 or back to blog list
  if (!blog) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <>
    <div className="min-h-screen bg-white text-black px-6 pt-32 pb-24 font-sans">
      <div className="max-w-5xl mx-auto">
        
        {/* Top Navigation: Updated with your custom button styling */}
        <Link 
          to="/blog" 
          className="inline-block font-[font1] font-bold uppercase border-2 lg:border-[3px] border-black rounded-full px-6 py-1.5 lg:px-8 lg:py-2 text-lg lg:text-2xl hover:bg-[#D3FD50] hover:border-black transition-colors duration-300 mb-16"
        >
          ← Back
        </Link>

        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl lg:text-[4vw] font-[font2] font-bold leading-tight mb-8 max-w-4xl mx-auto capitalize">
            {blog.title.toLowerCase()}
          </h1>

          {/* Metadata Row */}
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 text-sm font-bold tracking-widest uppercase text-gray-800">
            <div className="flex items-center gap-3">
              <img src={blog.authorAvatar} alt={blog.author} className="w-8 h-8 rounded-full object-cover" />
              <span>{blog.author}</span>
            </div>
            <div>
              <span className="text-gray-400 mr-2">Cat:</span>
              <span>{blog.category}</span>
            </div>
            <div>
              <span className="text-gray-400 mr-2">Date:</span>
              <span>{blog.date}</span>
            </div>
          </div>
        </div>

        {/* Horizontal Line separating header from article */}
        <hr className="border-t-2 border-black mb-12 max-w-4xl mx-auto" />

        {/* Featured Image */}
        <div className="w-full mb-16 max-w-4xl mx-auto">
          <img 
            src={blog.image} 
            alt={blog.title} 
            className="w-full h-auto max-h-[70vh] object-cover rounded-3xl bg-gray-100"
          />
        </div>

        {/* Article Body */}
        <div className="max-w-2xl mx-auto font-[font1]">
          {blog.content.map((paragraph, index) => (
            <p key={index} className="text-lg md:text-xl leading-relaxed text-gray-800 mb-8">
              {paragraph}
            </p>
          ))}
        </div>

      </div>
    </div>
    <Footer/>
    </>
  );
};

export default BlogPost;