import React, { Fragment } from 'react'
import Header from '../Header/Header'
import Nav from '../nav/Nav'
import '../../sassUtils/_util.scss';

function Layout(props) {
    return (
        <Fragment>
            <div className="light">
                <Header />
                <div>
                    {props.children}
                </div>
            </div>
        </Fragment>
    )
}

export default Layout
