import { links } from "@/static/sections";

export default function Layout({ children }) {
    return (
        <>
            <div className="h-auto container px-4 lg:mx-auto lg:px-32">
                <nav className="sticky top-4 my-4 h-1/4">
                    <ul className='flex justify-between flex-wrap'>
                        {links.map(({ id, ref, name }) => {
                            return (
                                <li className="hover:text-gray-400" key={id}>
                                    <a href={`#${ref}`}>
                                        {name}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
                <main className="flex flex-col">
                    {children}
                </main>
                <footer>
                </footer>
            </div>

        </>
    );
}