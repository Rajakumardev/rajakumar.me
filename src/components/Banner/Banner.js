import React from 'react'
import banner from "./Banner.module.scss";

function Banner() {
    return (
        <div className={banner.container}>
            <div className={banner.child}>
                <div className={banner.profcard} >

                </div>
            </div>
            <div className={banner.child}>
                2
            </div>
        </div>
    )
}

export default Banner
