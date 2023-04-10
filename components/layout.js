import { links } from "@/links/links";

export default function Layout({ children }) {
    return (
        <>
            <div className="h-auto container lg:mx-auto lg:px-32">
                <nav className="sticky top-4 my-4 h-1/4">
                    <ul class='flex justify-start lg:justify-between flex-wrap'>
                        {links.map(({ id, name }) => {
                            return (
                                <li key={id}>
                                    <a href={`#${id}`}>
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