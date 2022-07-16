import './App.css';
import Captioning from './components/Captioning';
import Controls from './components/Controls';
import Top from './components/Top';
import Video from './components/Video';
import { MdSubtitles } from 'react-icons/md';
import { BsMusicNote } from 'react-icons/bs';




function App() {

  return (
    <div className="flex flex-col items-center mt-20 min-h-screen">
      <div className='container bg-[#282828] w-2/3 text-white rounded-md'>
        <div className='h-16'>
          <Top></Top>
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 bg-[#282828]">
            <Captioning></Captioning>
            <Video></Video>
            <div className="col-span-2 border-t-[1px] mt-0 border-gray-700">
              <Controls></Controls>
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
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
