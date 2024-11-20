import React from 'react'
import Navbar from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <main  style={{ minHeight: "auto", backgroundColor: '#1A1A1D', color: 'white' }}>{children}</main>
            <Footer />
        </div>
    )
}

export default Layout