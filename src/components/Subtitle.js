import React from 'react';
import { MdSubtitles } from 'react-icons/md';
import { BsMusicNote } from 'react-icons/bs';

const Subtitle = () => {
    return (
        <div class="grid grid-cols-6 mt-10 mb-5">
                <div class="col-start-1 border-[1px] border-gray-700 border-l-4 border-l-blue-400 pl-5 py-2">
                  <span className='text-2xl text-blue-400'><MdSubtitles /></span>
                </div>
                <div class="col-start-2 col-end-7 border-[1px] border-gray-700"></div>
                <div class="col-start-1 border-[1px] border-gray-700 pl-5 py-2">
                <span className='text-2xl text-gray-400'><BsMusicNote /></span>
                </div>
                <div class="col-start-2 col-end-7 border-[1px] border-gray-700">
                </div>
              </div>
    );
};

export default Subtitle;