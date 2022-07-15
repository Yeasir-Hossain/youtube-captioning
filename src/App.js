import './App.css';
import Captioning from './components/Captioning';
import Top from './components/Top';


function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className='container bg-[#282828] w-2/3 text-white rounded-md'>
        <div className='h-16'>
          <Top></Top>
          <div class="grid grid-cols-2 gap-4 bg-[#282828]">
            <div><Captioning></Captioning></div>
            <div class="">02</div>
            <div class="col-span-2">04</div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
