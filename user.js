import React, { useState } from 'react';
const UserRegister = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [experience, setExperience] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const handleSubmit = async (event) => {
        event.preventDefault();
        setErrorMessage('');
        setSuccessMessage('');
        try {
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, experience }),
            });
            const data = await response.text();
            if (response.ok) {
                setSuccessMessage('User registered successfully!');
                // Optionally reset the form
                setName('');
                setEmail('');
                setExperience('');
            } else {
                setErrorMessage(data || 'Registration failed. Please try again.');
            }
        } catch (error) {
            setErrorMessage('An error occurred. Please try again later.');
            console.error(error);
        }
    };
    return (
        <div>
            <h2>User Registration</h2>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    required
                />
                <br />
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                />
                <br />
                <label>Experience:</label>
                <textarea
                    value={experience}
                    onChange={(event) => setExperience(event.target.value)}
                    required
                />
                <br />
                <button type="submit">Register</button>
            </form>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
        </div>
    );
};
export default UserRegister;