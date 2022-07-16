import React from 'react';
import { IoMdUndo, IoMdRedo } from 'react-icons/io';
import { HiZoomOut, HiZoomIn } from 'react-icons/hi';
import { useState } from 'react';


const Controls = () => {
    const [rangeval, setRangeval] = useState(75)
    const handlerange = (e) => {
        const range = e.target.value;
        setRangeval(range)
    }
    const handlezoomout = () => {
        const newrange = parseInt(rangeval) - 25
        setRangeval(newrange)
    }
    const handlezoomin = () => {
        const newrange = parseInt(rangeval) + 25
        setRangeval(newrange)
    }
    return (
        <div className='flex px-6 mt-2 items-center'>
            <div className='flex-1'>
                <input type="text" class="input input-bordered rounded-sm w-24 h-8 bg-transparent focus:border-blue-400 p-0" />
                <button class="btn gap-2 btn-ghost no-animation text-gray-400 bg-transparent hover:bg-transparent">
                    <span className='text-xl'><IoMdUndo /></span>
                    UNDO
                </button>
                <button class="btn gap-2 btn-ghost no-animation text-gray-500 bg-transparent hover:bg-transparent p-0">
                    <span className='text-xl'><IoMdRedo /></span>
                    REDO
                </button>
            </div>
            <div className='flex space-x-10'>
                <button onClick={handlezoomout}><span className='text-xl text-gray-400 hover:text-white'><HiZoomOut /></span></button>
                <input className='w-40' type="range" min="0" list="tickmarks" max="100" value={rangeval} onChange={handlerange} step="25" />
                <datalist id="tickmarks">
                    <option value="0"></option>
                    <option value="25"></option>
                    <option value="50"></option>
                    <option value="75"></option>
                    <option value="100"></option>
                </datalist>
                <button onClick={handlezoomin}><span className='text-xl text-gray-400 hover:text-white'><HiZoomIn /></span></button>
            </div>
        </div>
    );
};

export default Controls;