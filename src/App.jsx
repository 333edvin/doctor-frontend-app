import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import SingleDoc from './components/SingleDoc';
import Homepage from './components/Homepage';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/view/:id' element={<SingleDoc/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
