import './App.css';
import MainCard from './components/MainCard';
import logo from './assets/images/logo.svg';
function App() {
  return (
    <div
      className='bg-neutral-light-grayish-cyan flex flex-col justify-center items-center h-screen'
    >
      <div className="flex flex-col items-center">
        <img
          src={logo}
          alt="Logo"
          className="w-16 h-16 mb-4"
        />
        {/* Main Card Component */}
        <MainCard />
      </div>
    </div>
  );
}

export default App;
