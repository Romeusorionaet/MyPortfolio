import {Routes, Route} from 'react-router-dom';

import {Email} from '../pages/Email';
import {Gear} from '../pages/Gear';
import {Home} from '../pages/Home';

export function AppRoutes() {

    return(
        <Routes>
            <Route path='/Email' element={<Email />} />
            <Route path='/Gear' element={<Gear />} />
            <Route path='/' element={<Home />} />
        </Routes>
    )
}