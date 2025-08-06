"use client";

import {
  useState,
  unstable_ViewTransition as ViewTransition,
  startTransition,
} from "react";

import { DarkModeToggle } from "@/components/custom/dark-mode-toggle";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Linkedin, Github } from "lucide-react";

export default function Home() {
  const [fullScreen, setFullScreen] = useState<boolean>(false);

  if (fullScreen) {
    return (
      <div className="p-16 flex-1 w-full flex items-stretch gap-4">
        <ViewTransition name="project-1">
          <div
            className=" w-[80%] bg-gray-400"
            onClick={() =>
              startTransition(() => setFullScreen((fullScreen) => !fullScreen))
            }
          />
        </ViewTransition>
        <aside className="flex-1">
          <ul className="h-full flex flex-col gap-2">
            <li className="flex-1">
              <ViewTransition name="project-2">
                <div className="h-full w-full bg-gray-400"></div>
              </ViewTransition>
            </li>
            <li className="flex-1">
              <ViewTransition name="project-3">
                <div className="h-full w-full bg-gray-400"></div>
              </ViewTransition>
            </li>
            <li className="flex-1">
              <ViewTransition name="project-4">
                <div className="h-full w-full bg-gray-400"></div>
              </ViewTransition>
            </li>
          </ul>
        </aside>
      </div>
    );
  }

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
          <Separator />
          <ul className="flex gap-4 mt-4">
            <li>
              <Button variant="default" size="icon">
                <a href="https://www.linkedin.com/in/hao-duong-a87058196/">
                  <Linkedin />
                </a>
              </Button>
            </li>
            <li>
              <Button variant="default" size="icon">
                <a href="https://github.com/duonghao">
                  <Github />
                </a>
              </Button>
            </li>
          </ul>
        </header>
        <section className="h-full">
          <Tabs defaultValue="projects" className="w-full h-full">
            <TabsList>
              <TabsTrigger value="projects">Projects</TabsTrigger>
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="blogs">Blogs</TabsTrigger>
              <TabsTrigger value="photography">Photography</TabsTrigger>
            </TabsList>
            <TabsContent value="projects" className="h-full">
              <article className="h-full">
                <ul className="grid grid-cols-2 gap-2 flex-1 h-full">
                  <li>
                    <ViewTransition name="project-1">
                      <button
                        className="h-full w-full bg-gray-400"
                        onClick={() =>
                          startTransition(() =>
                            setFullScreen((fullScreen) => !fullScreen),
                          )
                        }
                      />
                    </ViewTransition>
                  </li>
                  <li>
                    <ViewTransition name="project-2">
                      <div className="h-full w-full bg-gray-400"></div>
                    </ViewTransition>
                  </li>
                  <li>
                    <ViewTransition name="project-3">
                      <div className="h-full w-full bg-gray-400"></div>
                    </ViewTransition>
                  </li>
                  <li>
                    <ViewTransition name="project-4">
                      <div className="h-full w-full bg-gray-400"></div>
                    </ViewTransition>
                  </li>
                </ul>
              </article>
            </TabsContent>
            <TabsContent value="experience"></TabsContent>
            <TabsContent value="blogs"></TabsContent>
            <TabsContent value="photography"></TabsContent>
          </Tabs>
        </section>
      </main>
    </>
  );
}
