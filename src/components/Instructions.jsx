import React from 'react';
import "./styles/Instructions.css";

export const Instructions = props => {
    return (
        <div>
            <ul>
                <li>Day 1. Watch 2-3 minutes scene with English subtitles. Do it 4-5 times for this day.</li>
                <li>Day 2. Watch the same scene without subtitles.  Watch the scene 4-5 times.</li>
                <li>Day 3. Watch the same scene, pause after each sentence, and repeat after the actors. Copy their pronunciation.</li>
                <li>Day 4. "Track" or "shadow" the same scene. Speak with the actors at the same time, no pausing. Copy their pronunciation. Use English subtitles if needed.</li>
                <li>Day 5. "Track" or “shadow” without subtitles and copy the pronunciation, emotions and movements of the actors.</li>
                <li>Day 6. (optional) Use the same scene and record your voice as you "track" or "shadow" it. Compare your voice recording to the actors’ pronunciation.</li>
            </ul>
            {/* More info: https://effortlessenglishclub.com/learn-english-with-movies-using-this-movie-technique */}
        </div>
    )
}
