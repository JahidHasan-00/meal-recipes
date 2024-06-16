import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet, useLocation, useNavigation } from 'react-router-dom';

const Home = () => {
    const navigation = useNavigation();
    // console.log(navigation);
    const location = useLocation();
    console.log(location);
    return (
        <div>
            {/* <h1 className='text-xl font-bold'>This is the  home component</h1> */}
            <Header></Header>
            {
                navigation.state === 'loading'? <p>loading</p>: <Outlet></Outlet>
            }
            <Footer></Footer>
        </div>
    );
};

export default Home;