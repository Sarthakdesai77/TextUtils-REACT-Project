import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar title="TextUtils" About="About Us" />
      <div className="container my-3">
        <TextForm title="Change text" />
      </div>
    </>
  );
}

export default App;
