import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import PageBasic from './pages/PageBasic'
import PageScrollable from './pages/PageScrollable';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/contactme" element = {<PageBasic type = "contactme"/>}/>
        <Route path = "/codingprojects" element = {<PageScrollable type = "code"/>}/>
        <Route path = "/organizations" element = {<PageBasic type = "organizations"/>}/>
        <Route path = "/poetryprojects" element = {<PageScrollable type = "poetry"/>}/>
      </Routes>
    </BrowserRouter>

    
  );
}

export default App;
