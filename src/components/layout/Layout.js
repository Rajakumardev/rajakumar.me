import React, { Fragment } from 'react'
import Header from '../Header/Header'
import '../../sassUtils/_util.scss';
import './Layout.scss';
import Footer from '../Footer/Footer';

function Layout(props) {
    return (
        <Fragment>
            <div className="light layout-container">
                <Header />
                <main className="main">
                    {props.children}
                </main>
                <Footer />
            </div>
        </Fragment>
    )
}

export default Layout
