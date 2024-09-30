import React, { useState } from 'react';
import './styles.css';
const App = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        experience: '',
        education: '',
        skills: '',
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // You can add functionality to handle form submission here
    };
    const downloadResume = () => {
        // Placeholder for download functionality
        alert("Download feature not implemented yet.");
    };
    return (
        <div id="root">
            <h1>Resume Builder</h1>
            <form id="resume-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />               
                <label htmlFor="experience">Experience:</label>
                <textarea id="experience" name="experience" value={formData.experience} onChange={handleChange} required></textarea>            
                <label htmlFor="education">Education:</label>
                <textarea id="education" name="education" value={formData.education} onChange={handleChange} required></textarea>
                <label htmlFor="skills">Skills:</label>
                <input type="text" id="skills" name="skills" value={formData.skills} onChange={handleChange} required />
                <button type="submit">Generate Resume</button>
            </form>
            <div id="resume-preview">
                <h2>Resume Preview</h2>
                <div id="preview-content">
                    <h3>{formData.name}</h3>
                    <p>Email: {formData.email}</p>
                    <h4>Experience</h4>
                    <p>{formData.experience}</p>
                    <h4>Education</h4>
                    <p>{formData.education}</p>
                    <h4>Skills</h4>
                    <p>{formData.skills}</p>
                </div>
                <button id="download-button" onClick={downloadResume}>Download PDF</button>
            </div>
        </div>
    );
};
export default App;