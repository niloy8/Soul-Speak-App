// src/pages/ShareStory.jsx
import React, { useState } from 'react';
import './ShareStory.css';

function ShareStory() {
    const [emotion, setEmotion] = useState('');
    const [customEmotion, setCustomEmotion] = useState('');
    const [story, setStory] = useState('');
    const [isAnonymous, setIsAnonymous] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        const finalEmotion = emotion === 'other' ? customEmotion : emotion;
        const postData = { emotion: finalEmotion, story, isAnonymous };
        console.log('Story Submitted:', postData);

        // Reset form
        setEmotion('');
        setCustomEmotion('');
        setStory('');
        setIsAnonymous(true);
    };

    return (
        <div className="soulspeak-share-page">
            <h1 className="soulspeak-share-title">Share Your Story</h1>
            <form className="soulspeak-form" onSubmit={handleSubmit}>
                <label>How do you feel?</label>
                <select
                    value={emotion}
                    onChange={(e) => setEmotion(e.target.value)}
                    required
                >
                    <option value="">Select Emotion</option>
                    <option value="happy">😊 Happy</option>
                    <option value="sad">😢 Sad</option>
                    <option value="angry">😡 Angry</option>
                    <option value="confused">😕 Confused</option>
                    <option value="grateful">🙏 Grateful</option>
                    <option value="heartbroken">💔 Heartbroken</option>
                    <option value="other">✏️ Other (Type below)</option>
                </select>

                {emotion === 'other' && (
                    <input
                        type="text"
                        placeholder="Type your emotion..."
                        value={customEmotion}
                        onChange={(e) => setCustomEmotion(e.target.value)}
                        required
                    />
                )}

                <label>Your Story</label>
                <textarea
                    rows="8"
                    placeholder="Write your thoughts here..."
                    value={story}
                    onChange={(e) => setStory(e.target.value)}
                    required
                ></textarea>

                <div className="soulspeak-anonymous">
                    <input
                        type="checkbox"
                        checked={isAnonymous}
                        onChange={() => setIsAnonymous(!isAnonymous)}
                    />
                    <span>Post as anonymous</span>
                </div>

                <button type="submit" className="soulspeak-submit-btn">Share Story</button>
            </form>
        </div>
    );
}

export default ShareStory;
