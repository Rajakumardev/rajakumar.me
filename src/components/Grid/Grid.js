import React from 'react'
import './Grid.scss';

const Grid = () => {
    return (
        <div className="grid-container">
            {/* <h3>Grid</h3> */}
            <div className="grid-content">
                <div className="grid-item">
                    <h4>1</h4>
                </div>
                <div className="grid-item">
                    <h4>2</h4>
                </div>
                <div className="grid-item">
                    <h4>3</h4>
                </div>
                <div className="grid-item">
                    <h4>4</h4>
                </div>
                <div className="grid-item">
                    <h4>5</h4>
                </div>
                <div className="grid-item">
                    <h4>6</h4>
                </div>
            </div>
        </div>
    )
}

export default Grid
