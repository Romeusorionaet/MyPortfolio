import {Routes, Route} from 'react-router-dom';

import {Gear} from '../pages/Gear';
import {Home} from '../pages/Home';

export function AppRoutes() {

    return(
        <Routes>
            <Route path='/Gear' element={<Gear />} />
            <Route path='/' element={<Home />} />
        </Routes>
    )
}