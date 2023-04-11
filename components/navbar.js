import { sections } from "@/static/sections";

export default function Navbar(props) {
    
    return (
        <nav className="sticky top-4 my-4 h-1/4">
            <ul className='flex justify-between flex-wrap'>
                {sections.map(({ link_id, section_id, name }) => {
                    return (
                        <li className={"text-white" + (props.active == section_id ? " font-bold underline decoration-plum underline-offset-8" : "font-semibold")} key={link_id}>
                            <a href={`#${section_id}`}>
                                {name}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}