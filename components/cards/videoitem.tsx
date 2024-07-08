
// components/cards/VideoItem.tsx
"use client"
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface VideoItemProps {
  file: string;
}

const VideoItem: React.FC<VideoItemProps> = ({ file }) => {
  const [liked, setLiked] = useState(false);
  const [showCommentInput, setShowCommentInput] = useState(false);
  const [commentText, setCommentText] = useState('');
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.play();
          } else {
            entry.target.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  const handleCommentIconClick = () => {
    setShowCommentInput(!showCommentInput);
  };

  const handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCommentText(event.target.value);
  };

  const handleCommentSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Comment submitted:', commentText);
    setCommentText('');
    setShowCommentInput(false); // Hide comment input after submitting
  };

  const handleShareClick = () => {
    console.log('Share clicked');
  };

  return (
    <div className="flex justify-center items-center my-8 w-full">
      <div className="video-container">
        <video ref={videoRef} className="w-full h-full object-cover" controls>
          <source src={file} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent">
          <div className="video-controls">
            <button
              className={`video-controls-button ${liked ? 'liked' : ''}`}
              onClick={handleLikeClick}
            >
              <Image src="/assets/heart.svg" alt="Like" width={30} height={30} className="icon-size" />
            </button>
            <button
              className="video-controls-button"
              onClick={handleCommentIconClick}
            >
              <Image src="/assets/reply.svg" alt="Comment" width={30} height={30} className="icon-size" />
            </button>
            <button
              className="video-controls-button"
              onClick={handleShareClick}
            >
              <Image src="/assets/share.svg" alt="Share" width={30} height={30} className="icon-size" />
            </button>
          </div>
        </div>
        <div className="video-controls-md">
          <button
            className={`video-controls-button ${liked ? 'liked' : ''}`}
            onClick={handleLikeClick}
          >
            <Image src="/assets/heart.svg" alt="Like" width={30} height={30} className="icon-size" />
          </button>
          <button
            className="video-controls-button"
            onClick={handleCommentIconClick}
          >
            <Image src="/assets/reply.svg" alt="Comment" width={30} height={30} className="icon-size" />
          </button>
          <button
            className="video-controls-button"
            onClick={handleShareClick}
          >
            <Image src="/assets/share.svg" alt="Share" width={30} height={30} className="icon-size" />
          </button>
        </div>
      </div>
      {showCommentInput && (
        <form onSubmit={handleCommentSubmit} className="comment-form">
          <input
            type="text"
            value={commentText}
            onChange={handleCommentChange}
            placeholder="Add a comment..."
            className="comment-form_input"
          />
          <button type="submit" className="comment-form_btn">
            Send
          </button>
        </form>
      )}
    </div>
  );
};

export default VideoItem;
