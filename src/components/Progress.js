import React from 'react';
import '../App.css'; 
import styled from '@emotion/styled/base';

const Progress = () => {
    
    const courses = [
        {
            title: 'React Js',
            progress: 40, 
            totalLessons: 10,
            completedLessons: 4,
        
        },
        {
            title: 'HTML Basics',
            progress: 80,
            totalLessons: 12,
            completedLessons: 10,
        },
        {
            title: 'CSS Flexbox and Grid',
            progress: 50,
            totalLessons: 10,
            completedLessons: 5,
        },
        {
            title: 'Tailwind Fundamentals',
            progress: 70,
            totalLessons: 8,
            completedLessons: 5,
        },
    ];

    return (
        <div className="progress-container"style={{borderRadius:"30px 50px"}}>
            <h2 className="progress-title"style={{color:"#e5cec8"}}>Course Progress</h2>

            {courses.map((course, index) => (
                <div key={index} className="course-card">
                    <h3 className="course-title"style={{color:"#e5cec8"}}>{course.title}</h3>
                    <div className="progress-bar">
                        <div
                            className="progress-fill"
                            style={{ width: `${course.progress}%` }}
                        ></div>
                    </div>
                    <p className="progress-info">
                        {course.completedLessons} of {course.totalLessons} lessons completed ({course.progress}%)
                    </p>
                </div>
            ))}
        </div>
    );
};

export default Progress;
