import {BrowserRouter, Route, Routes} from "react-router-dom";
import Welcome from './pages/Welcome';
import Home from './pages/Home';
import AbouTMe from './pages/AboutMe';
import MyCV from './pages/MyCV';
import Documentation from './pages/Documentation';
import Proyects from './pages/Proyects';
import TaskManager from './components/taskmanager/TaskManager';
import './assets/Styles/App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Welcome/>}/>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/AboutMe' element={<AbouTMe/>}/>
          <Route path='/MyCV' element={<MyCV/>}/>
          <Route path='/Documentation' element={<Documentation/>}/>
          <Route path='/Proyects' element={<Proyects/>}/>
          <Route path='/Proyects/TaskManager' element={<TaskManager/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
