import Layout from '@/components/layout';
import Head from 'next/head';
import React from 'react';
import { sections } from '@/public/static/sections';
import Section from '@/components/section';
import Navbar from '@/components/navbar';
import Animation from '@/components/animation';
import { useState, useRef, useEffect, forwardRef } from 'react';
import { config, dom } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export default function Home() {
  const [active, setActive] = useState(sections[0].section_id);
  const refs = []

  // Attach and detach intersection observers
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setActive(entry.target.id);
      }
    },
      {
        threshold: 0.9,
      })

    refs.forEach((ref) => {
      observer.observe(ref)
    });

    return () => {
      refs.forEach((ref) => ref && observer.unobserve(ref));
    };
  })

  return (
    <>
      <Head>
        <title>
          Hao&apos;s Portfolio
        </title>
        <style>{dom.css()}</style>
      </Head>
      <Layout>
        <Navbar active={active}></Navbar>
        <main>
          {
            sections.map((props) => {
              return (
                <>
                  <Section
                    key={props.section_id}
                    {...props}
                    ref={(node) => {
                      if (node) {
                        refs.push(node);
                      }
                    }}
                    >
                    </Section>
                </>
              );
            })
          }
        </main>
        <footer></footer>
      </Layout>
    </>
  );
}
