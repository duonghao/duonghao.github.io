import { useState, useRef, useEffect, forwardRef } from 'react';

const Section = forwardRef((props, ref) => {
    return (
        <section id={props.section_id} className="min-h-screen flex flex-col justify-center" ref={ref}>
            <h1 className="text-xl lg:text-4xl">
                {props.heading}
            </h1>
            <h2 className="text-l lg:text-2xl">
                {props.subheading}
            </h2>
        </section>
    );
});
Section.displayName = "Section";

export default Section;