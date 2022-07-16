import React from 'react';
import vdo from '../assets/Add Subtitles to Video.mov'
const Video = () => {
    return (
        <div className='h-96'>
            <div className='p-10'>
                <video controls autoPlay src={vdo}></video>
            </div>
            <div className='ml-5'>
                <input type="checkbox" name="pause" id="" /> Pause while playing
            </div>
        </div>
    );
};

export default Video;