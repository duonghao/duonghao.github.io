import Layout from '@/components/layout';
import Head from 'next/head';
import React from 'react';
import { sections } from '@/static/sections';
import Section from '@/components/section';

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Hao's Portfolio
        </title>
      </Head>
      <Layout>
        {
          sections.map((props) => {
          return (
            <Section key={props.id} {...props}></Section>
          );
          })
        }
      </Layout>
    </>
  );
}
