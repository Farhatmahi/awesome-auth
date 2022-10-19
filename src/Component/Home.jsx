import React, {useContext} from 'react';
import { authContext } from '../Context/UserContext';

const Home = () => {
    const {user} = useContext(authContext)
    return (
        <div>
            <h2 className='text-5xl mt-20'>Welcome {user?.email}</h2>
        </div>
    );
};

export default Home;