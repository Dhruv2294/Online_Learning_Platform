import React, { useState } from 'react';
import '../App.css'; 

const Homework = () => {
    
    const predefinedHomework = {
        Math: [
            { title: 'Derivatives Assignment', dueDate: '2024-11-20', isCompleted: false },
            { title: 'Calculus Assignment', dueDate: '2024-11-22', isCompleted: false },
        ],
        Science: [
            { title: 'Wind Turbine Project', dueDate: '2024-11-21', isCompleted: false },
            { title: 'Balloon Car Project', dueDate: '2024-11-25', isCompleted: false },
        ],
        English: [
            { title: 'Essay Writing', dueDate: '2024-10-28', isCompleted: false },
            { title: 'Grammar Sentences', dueDate: '2024-10-24', isCompleted: false },
        ],
        History: [
            { title: 'World War II Project', dueDate: '2024-11-17', isCompleted: false },
            { title: 'The Cold War Project', dueDate: '2024-10-21', isCompleted: false },
        ],
        Geography: [
            { title: 'Effects of Global Warming', dueDate: '2024-10-22', isCompleted: false },
            { title: 'Military Geography', dueDate: '2024-10-21', isCompleted: false },
        ],
    };

    
    const [selectedSubject, setSelectedSubject] = useState('');

    return (
        <div className="homework-container">
            <h2 className="homework-title"style={{color:"grey"}}>Homework</h2>

            <select 
                className="subject-select"
                onChange={(e) => setSelectedSubject(e.target.value)} 
                value={selectedSubject}
            >
                <option value="">Select a Subject</option>
                {Object.keys(predefinedHomework).map((subject) => (
                    <option key={subject} value={subject}>
                        {subject}
                    </option>
                ))}
            </select>

            {selectedSubject && (
                <div className="homework-list">
                    <h3 className="subject-heading">{selectedSubject} Homework</h3>
                    <ul>
                        {predefinedHomework[selectedSubject].map((item, index) => (
                            <li key={index} className="homework-item" style={{ textDecoration: item.isCompleted ? 'line-through' : 'none' }}>
                                <strong>{item.title}</strong> - Due: <span className="due-date">{item.dueDate}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Homework;
