import React, { useState } from 'react';
const ResumeForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', experience: '' });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Add API call to save the resume here
    };
    return (
        <form onSubmit={handleSubmit}>
            <input name="name" placeholder="Name" onChange={handleChange} />
            <input name="email" placeholder="Email" onChange={handleChange} />
            <textarea name="experience" placeholder="Experience" onChange={handleChange}></textarea>
            <button type="submit">Save Resume</button>
        </form>
    );
};
export default ResumeForm;