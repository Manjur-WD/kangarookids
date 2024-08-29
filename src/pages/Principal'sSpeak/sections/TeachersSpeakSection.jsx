import React from 'react';

const TeachersSpeakSection = () => {
  return (
    <section className="contact-section space-page">
      <div className="container">
        <div className="iframe-teacher-talk">
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/uVlqdH65uV8"
            title="Kangaroo Kids' Inspiring Lessons"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
        
        <div id="calendar">
          {/* Calendar integration can be added here */}
        </div>
      </div>
    </section>
  );
};

export default TeachersSpeakSection;
