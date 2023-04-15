import { useState, useRef, useEffect, forwardRef } from 'react';

const Section = forwardRef((props, ref) => {
    return (
        <section id={props.section_id} className="min-h-screen flex flex-col justify-center relative" ref={ref}>
            <h1 className="font-bold">
                {props.heading}
            </h1>
            <h2 className="ont-semibold mb-4">
                {props.subheading}
            </h2>
            {props.children}
        </section>
    );
});
Section.displayName = "Section";

export default Section;