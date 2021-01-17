import React, { Fragment } from 'react'
import Header from '../Header/Header'
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
