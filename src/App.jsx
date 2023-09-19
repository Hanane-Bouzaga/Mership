import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import Blank from './Home/pages/Blank';

function App() {
    return (
            <Routes>
                <Route path='/' element={<Home />}>
                    <Route index element={<Blank />} />
                    <Route path='/started' element={<Blank />} />
                    <Route path='/calendar' element={<Blank />} />
                    <Route path='/user' element={<Blank />} />
                    <Route path='/order' element={<Blank />} />
                </Route>
            </Routes>
    );
}

export default App;