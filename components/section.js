import { useState, useRef, useEffect } from 'react';

export default function Section(props) {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const ref = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) =>{
        setIsIntersecting(entry.isIntersecting);
        },
        {
            rootMargin: "-20%",
        });
        console.log(isIntersecting);
        observer.observe(ref.current);
        return () => observer.disconnect;
    });
    useEffect(() => {
        if (isIntersecting) {
            ref.current.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });

    return (
        <section id={props.id} className="min-h-screen flex flex-col justify-center" ref={ref}>
            <h1 className="text-xl lg:text-4xl">
                {props.heading}
            </h1>
            <h2 className="text-l lg:text-2xl">
                {props.subheading}
            </h2>
        </section>
    );
}