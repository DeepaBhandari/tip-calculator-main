import './App.css';
import MainCard from './components/MainCard';
import logo from './assets/images/logo.svg';
function App() {
  return (
    <>
      <div
        className='bg-neutral-light-grayish-cyan flex flex-col font-body justify-center items-center h-screen font-fontFamily'
      >
        <div className="flex flex-col items-center">
          <img
            src={logo}
            alt="Logo"
            className="w-12 h-8 mb-8"
          />
          <MainCard />
        </div>
      </div>
    </>
  );
}

export default App;
