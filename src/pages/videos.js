// src/pages/videos.js

import React from 'react';

// Static list of videos – you can later load this from a database or API
const videoData = [
  {
    title: 'Improve Batting Footwork - Drill 1',
    url: 'https://www.youtube.com/embed/VIDEO_ID_1',
    date: '2024-12-10',
    category: 'Cricket',
  },
  {
    title: 'Bowling Accuracy Tips',
    url: 'https://www.youtube.com/embed/VIDEO_ID_2',
    date: '2025-01-05',
    category: 'Cricket',
  },
  {
    title: 'Morning Yoga for Flexibility',
    url: 'https://www.youtube.com/embed/VIDEO_ID_3',
    date: '2024-11-20',
    category: 'Yoga',
  },
  {
    title: 'Breathing Techniques for Balance',
    url: 'https://www.youtube.com/embed/VIDEO_ID_4',
    date: '2025-02-15',
    category: 'Yoga',
  },
];

// Sort by date descending
const sortedVideos = videoData.sort((a, b) => new Date(b.date) - new Date(a.date));

// Group by category
const categories = ['Cricket', 'Yoga'];

const Videos = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Coach's YouTube Videos</h1>

      {categories.map((category) => (
        <div key={category} className="mb-12 w-fit mx-auto">
          <h2 className="text-2xl font-semibold mb-4 ml-14">{category} Videos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">  
            {sortedVideos
              .filter((video) => video.category === category)
              .map((video, idx) => (
                <div key={idx} className="bg-white p-4 rounded shadow-md">
                  <iframe
                    className="w-full aspect-video rounded"
                    src={video.url}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  <h3 className="mt-2 font-semibold text-lg">{video.title}</h3>
                  <p className="text-sm text-gray-500">{new Date(video.date).toDateString()}</p>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Videos;
