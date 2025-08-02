import { DarkModeToggle } from "@/components/custom/dark-mode-toggle";
import { Linkedin, Github } from "lucide-react";

export default function Home() {
  return (
    <>
      <header className="flex justify-end">
        <DarkModeToggle></DarkModeToggle>
      </header>
      <main className="flex flex-1 h-full items-center justify-center md:grid md:grid-cols-2 md:gap-8">
        <header className="">
          <h3>Hello, World</h3>
          <h1>Hao Duong</h1>
          <p className="mt-2 mb-2">
            I’m a software engineer who loves building clean, thoughtful
            solutions to real-world problems. From crafting slick user
            interfaces to streamlining developer workflows, I’ve worked across
            the stack with React, TypeScript, and Java to make things work—and
            work well.
          </p>
          <ul className="flex gap-4">
            <li>
              <a href="https://www.linkedin.com/in/hao-duong-a87058196/">
                <Linkedin />
              </a>
            </li>
            <li>
              <a href="https://github.com/duonghao">
                <Github />
              </a>
            </li>
          </ul>
        </header>
        <section className="h-full flex flex-col p-4 z-10">
          <nav className="mb-4">
            <ul className="flex gap-4 md:gap-8">
              <li>Experience</li>
              <li>Projects</li>
              <li>Blogs</li>
              <li>Photography</li>
            </ul>
          </nav>
          <ul className="grid grid-cols-2 gap-2 flex-1">
            <li>
              <div className="h-full w-full bg-gray-400"></div>
            </li>
            <li>
              <div className="h-full w-full bg-gray-400"></div>
            </li>
            <li>
              <div className="h-full w-full bg-gray-400"></div>
            </li>
            <li>
              <div className="h-full w-full bg-gray-400"></div>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
