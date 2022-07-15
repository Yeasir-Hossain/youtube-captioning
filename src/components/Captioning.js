import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { TbDotsVertical } from 'react-icons/tb';
import { MdDelete } from 'react-icons/md';

const Captioning = () => {
    return (
        <div className='border-r-[1px] border-gray-700 h-96'>
            <div class="flex">
                <div className='flex-1'>
                    <button class="btn gap-2 btn-ghost text-blue-400 bg-transparent hover:bg-transparent">
                        <span className='text-xl'><AiOutlinePlus /></span>
                        CAPTION
                    </button>
                </div>
                <div className='flex items-center justify-center'>
                    <button class="btn btn-ghost hover:bg-transparent text-blue-400">EDIT AS TEXT</button>
                    <button className="hover:tooltip hover:tooltip-open hover:tooltip-bottom" data-tip="options"><span className='text-xl text-gray-400 hover:text-white'><TbDotsVertical /></span></button>
                </div>
            </div>
            <div className='p-4 h-28 bg-black'>
                <div className='flex space-x-2 justify-around'>
                    <textarea class="textarea textarea-bordered rounded-sm bg-transparent focus:border-blue-400" cols="70"></textarea>
                    <button className="hover:tooltip hover:tooltip-open hover:tooltip-bottom" data-tip="remove caption line">
                        <span className='text-2xl text-gray-400 hover:text-white'><MdDelete /></span>
                    </button>
                    <div className='flex-col space-y-2'>
                        <input type="text" class="input input-bordered rounded-sm w-24 h-10 bg-transparent focus:border-blue-400" />
                        <input type="text" class="input input-bordered rounded-sm w-24 h-10 bg-transparent focus:border-blue-400" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Captioning;