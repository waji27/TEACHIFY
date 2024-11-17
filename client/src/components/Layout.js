import React from 'react'
import Navbar from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <main style={{ minHeight: "90vh" }}>{children}</main>
            <Footer />
        </div>
    )
}

export default Layout