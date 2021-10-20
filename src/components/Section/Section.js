import React from 'react';
import './Section.scss';

const Section = ({children, className}) => {
    return (
        <section className='section'>
            {children}
        </section>
    );
}

export default Section;
