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
import { Linkedin, Github, ArrowLeft } from "lucide-react";

export default function Home() {
  const [fullScreen, setFullScreen] = useState<boolean>(false);

  if (fullScreen) {
    return (
      <div className="py-4 px-8 lg:py-8 lg:px-16 h-full">
        <ViewTransition name="project-1">
          <div className="h-full w-full bg-gray-400 relative rounded-lg">
            <Button
              variant={"ghost"}
              className="absolute top-1 left-1"
              size={"icon"}
              onClick={() =>
                startTransition(() =>
                  setFullScreen((fullScreen) => !fullScreen),
                )
              }
            >
              <ArrowLeft />
            </Button>
          </div>
        </ViewTransition>
      </div>
    );
  }

  return (
    <>
      <header className="absolute w-full flex justify-end py-4 px-8 lg:py-8 lg:px-16">
        <DarkModeToggle></DarkModeToggle>
      </header>
      <main className="lg:h-full lg:grid lg:grid-cols-2">
        <header className="h-screen lg:h-full flex items-center justify-center py-4 px-8 lg:py-8 lg:px-16">
          <div>
            <h3>Hello, World</h3>
            <h1>Hao Duong</h1>
            <Separator className="my-4" />
            <p className="mt-2 mb-2">
              I’m a software engineer who loves building clean, thoughtful
              solutions to real-world problems. From crafting slick user
              interfaces to streamlining developer workflows, I’ve worked across
              the stack with React, TypeScript, and Java to make things work—and
              work well.
            </p>

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
          </div>
        </header>
        <section className="h-screen lg:h-full py-4 px-8 lg:pt-16 lg:pb-8 lg:px-16">
          <Tabs defaultValue="projects" className="lg:h-full">
            <TabsList>
              <TabsTrigger value="projects">Projects</TabsTrigger>
            </TabsList>
            <TabsContent value="projects" className="min-h-96 lg:h-full">
              <article className="h-full">
                <ul className="h-full">
                  <li className="h-full">
                    <ViewTransition name="project-1">
                      <button
                        className="aspect-square lg:aspect-auto lg:min-h-full w-full bg-gray-400 rounded-lg"
                        onClick={() =>
                          startTransition(() =>
                            setFullScreen((fullScreen) => !fullScreen),
                          )
                        }
                      />
                    </ViewTransition>
                  </li>
                </ul>
              </article>
            </TabsContent>
          </Tabs>
        </section>
      </main>
    </>
  );
}
