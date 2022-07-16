import './App.css';
import Captioning from './components/Captioning';
import Top from './components/Top';
import Video from './components/Video';
import { IoMdUndo,IoMdRedo } from 'react-icons/io';

function App() {
  return (
    <div className="flex flex-col items-center mt-20 min-h-screen">
      <div className='container bg-[#282828] w-2/3 text-white rounded-md'>
        <div className='h-16'>
          <Top></Top>
          <div class="grid sm:grid-cols-1 lg:grid-cols-2 bg-[#282828]">
            <Captioning></Captioning>
            <Video></Video>
            <div class="col-span-2  border-t-[1px] mt-0 border-gray-700">
              <div className='flex px-6 mt-2 align-middle justify-around'>
                <div>
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

              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
