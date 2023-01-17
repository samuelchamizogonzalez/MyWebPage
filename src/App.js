import {BrowserRouter, Route, Routes} from "react-router-dom";
import Welcome from './pages/Welcome';
import Home from './pages/Home';
import AbouTMe from './pages/AboutMe';
import MyCV from './pages/MyCV';
import Resources from './pages/Resources';
import Documentation from './pages/Documentation';
import Proyects from './pages/Proyects';
import TaskManager from './components/taskmanager/TaskManager';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Welcome/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/TaskManager' element={<TaskManager/>}/>
        {/*<Route path='/AboutMe' element={<AbouTMe/>}/>
        <Route path='/MyCV' element={<MyCV/>}/>
        <Route path='/Resources' element={<Resources/>}>
          <Route path='/Resources/Documentation' element={<Documentation/>}/>
          <Route path='/Resources/Proyects' element={<Proyects/>}/>
        </Route>*/}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
