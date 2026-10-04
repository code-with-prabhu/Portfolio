import React from 'react';
import { Link } from 'react-router-dom';
import { blogData } from '../data/blogData';
import Footer from '../components/common/Footer';

const BlogList = () => {
  return (
    <>
<div className="min-h-screen bg-white text-black px-6 pb-24 md:px-12 lg:px-24 font-sans">
      <div className="max-w-7xl mx-auto pt-10 lg:pt-16">
        
        {/* Heading: Shifted down and slightly left */}
        <h1 className="text-5xl lg:text-7xl font-[font2] font-bold uppercase mt-8 mb-6 tracking-tight -ml-1 lg:-ml-6 lg:mt-15">
          Articles
        </h1>

        {/* Horizontal Line separating heading and posts */}
        <hr className="border-t-2 border-black mb-15 lg:-ml-6" />

        {/* Structured List: Improved gap spacing and typography hierarchy */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
          {blogData.map((blog) => (
            <Link to={`/blog/${blog.id}`} key={blog.id} className="group flex flex-col cursor-pointer">
              
              {/* Image Container: Forced aspect ratio for strict alignment */}
              <div className="w-full aspect-4/3 overflow-hidden rounded-2xl mb-6 bg-gray-100">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Meta Data Row */}
              <div className="flex items-center gap-3 text-xs md:text-sm font-bold tracking-widest uppercase mb-4">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-black"></span>
                  {blog.date}
                </span>
                <span className="text-gray-400">|</span>
                <span className="text-gray-500">{blog.category}</span>
              </div>

              {/* Title */}
              <h2 className="text-2xl lg:text-3xl font-[font1] font-bold uppercase leading-snug group-hover:text-[#d2fd45ad] transition-colors">
                {blog.title}
              </h2>
              
            </Link>
          ))}
        </div>

      </div>
    </div>
    <Footer/>
    </>
  );
};

export default BlogList;