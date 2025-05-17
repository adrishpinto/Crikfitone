// src/pages/testimony.js

import React from 'react';

const testimonies = [
  {
    name: 'Arjun Mehta',
    sport: 'Cricket',
    content:
      'Coach’s unique techniques helped me improve my batting footwork and focus. Thanks to his guidance, I made it to the school district team!',
  },
  {
    name: 'Riya Kapoor',
    sport: 'Yoga',
    content:
      'I used to struggle with flexibility and breathing. Coach introduced a step-by-step routine that transformed my daily practice. I now feel more balanced and energized.',
  },
  {
    name: 'Sameer Reddy',
    sport: 'Cricket',
    content:
      'My bowling accuracy and stamina improved drastically. Coach’s drills and one-on-one sessions made a huge difference in my performance.',
  },
  {
    name: 'Anjali Sharma',
    sport: 'Yoga',
    content:
      'Before joining, I found it hard to focus during meditation. Now, I can hold poses longer and feel mentally clearer thanks to the coach’s patience and techniques.',
  },
];

const Testimony = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Student Testimonials</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {testimonies.map((t, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-2">{t.name}</h3>
            <p className="text-sm text-gray-600 mb-1 font-medium">{t.sport}</p>
            <p className="text-gray-700">{t.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimony;
