import Animation from "@/components/animation";
import CardLayout from "@/components/cardLayout";
import Contact from "@/components/contact";
import Experience from "@/components/experience";

const sections = [
    {
        link_id: 'home-link',
        section_id: 'home-section',
        name: 'Home',
        heading: "I'm Hao Duong",
        subheading: "Software Engineer. Mechanical Engineer.",
        children: <></>
    },
    {   
        link_id: 'projects-link',
        section_id: 'projects-section',
        name: 'Projects',
        heading: "Projects",
        subheading: "A snippet of the projects I've worked on...",
        children: <CardLayout></CardLayout>,
    },
    {
        link_id: 'experience-link',
        section_id: 'experience-section',
        name: 'Experience',
        heading: "Experience",
        subheading: "A snapshot of my experience so far...",
        children: <Experience></Experience>,
    },
    {
        link_id: 'contact-link',
        section_id: 'contact-section',
        name: 'Contact',
        heading: "Contact me",
        subheading: "Find me at...",
        children: <Contact></Contact>,
    }
];

export { sections } ;