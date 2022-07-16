import './App.css';
import Captioning from './components/Captioning';
import Controls from './components/Controls';
import Subtitle from './components/Subtitle';
import Top from './components/Top';
import Video from './components/Video';





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
              <Subtitle></Subtitle>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
