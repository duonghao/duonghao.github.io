import { links } from "@/static/sections";

export default function Layout({ children }) {
    return (
        <>
            <div className="h-auto container px-4 md:mx-auto md:px-32">
                {children}
            </div>

        </>
    );
}