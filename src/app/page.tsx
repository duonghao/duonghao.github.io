import { Linkedin, Github } from "lucide-react";

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen min-w-screen md:grid md:grid-cols-2 md:gap-8 p-16">
      <header className="">
        <h3>Hello, World</h3>
        <h1>Hao Duong</h1>
        <p className="mt-2 mb-2">
          I’m a software engineer who loves building clean, thoughtful solutions
          to real-world problems. From crafting slick user interfaces to
          streamlining developer workflows, I’ve worked across the stack with
          React, TypeScript, and Java to make things work—and work well.
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
      <div className="h-full">
        <section className=" p-4 z-10 h-full">
          <nav className="mb-4">
            <ul className="flex gap-4 md:gap-8">
              <li>Experience</li>
              <li>Projects</li>
              <li>Blogs</li>
              <li>Photography</li>
            </ul>
          </nav>
          <ul className="grid grid-cols-2 gap-2 h-full">
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
      </div>
    </main>
  );
}
