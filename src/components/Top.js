import React from 'react';
import { MdSubtitles, MdFeedback } from 'react-icons/md';
import { ImCross } from 'react-icons/im';

const Top = () => {
    return (
        <div className='border-b-[1px] border-gray-700'>
            <div className='flex'>
                <div className='flex flex-1 items-center justify-start space-x-4 p-4'>
                    <span className='text-3xl text-blue-400'><MdSubtitles /></span>
                    <h1 className='text-xl font-normal'>English (India)</h1>
                </div>
                <div className='flex flex-1 items-center justify-end space-x-5'>
                    <span className='text-3xl text-gray-400 hover:text-white'><MdFeedback /></span>
                    <button class="btn btn-ghost hover:bg-transparent font-normal text-blue-400">SAVE DRAFT</button>
                    <button class="btn bg-blue-500 hover:bg-blue-500 text-black rounded-md">PUBLISH</button>
                    <button class="btn btn-ghost text-gray-400 hover:bg-transparent hover:text-white"><ImCross /></button>
                </div>
            </div>
        </div>
    );
};

export default Top;