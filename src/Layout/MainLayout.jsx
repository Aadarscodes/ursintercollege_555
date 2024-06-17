import React from 'react'
import Header from '../Components/header'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

// function MainLayout({Children}) {
//     return (
//         <div>
//             <Header /> <br />
//             <Navbar></Navbar>
//             <div> {Children}</div>
           
//         </div>
//     )
// }

// export default MainLayout


// import React from 'react';
// import Header from '../header';
// import Navbar from '../Navbar';
// import Footer from '../Footer';

const MainLayout = ({ children }) => {
    return (
        <div>
            <Header />
            <Navbar />
            <div>{children}</div>
            <Footer />
        </div>
    );
};

export default MainLayout;
