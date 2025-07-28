
import './App.css';
import SampleCounter from './SampleCounter.jsx';
function App() {
  return (
    <>
      <h1 className="text-3xl font-bold text-center my-6">Welcome to the Sample Counter App</h1>
      <p className="text-center text-gray-600 mb-6">This is a simple counter application built with React .</p>
      
    <hr />
    
      <SampleCounter title="Sample Counter Component" />
    </>
  );
}

export default App;
