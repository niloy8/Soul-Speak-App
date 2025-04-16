// src/components/Home.jsx
import React from 'react';
import './Home.css';
import { Link } from 'react-router';

const Home = () => {
    return (
        <div className="soulspeak-home">
            <header className="soulspeak-header">
                <h1>💬 SoulSpeak</h1>
                <p>Where every emotion has a voice.</p>
            </header>

            <main className="soulspeak-main">
                <h2>Share your story</h2>
                <p>Whether you're feeling happy, sad, angry, or anything in between — this is your space to express.</p>

                <div className="soulspeak-buttons">
                    <Link to="/share-story"> <button className="soulspeak-btn share">Share Your Story</button></Link>
                    <button className="soulspeak-btn browse">Browse Stories</button>
                </div>
            </main>

            <footer className="soulspeak-footer">
                <p>Made with ❤️ for your soul.</p>
            </footer>
        </div>
    );
};

export default Home;
