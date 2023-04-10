import Layout from '@/components/layout';
import Head from 'next/head';


export default function Home() {
  return (
    <>
      <Head>
        <title>
          Home Page
        </title>
      </Head>
      <Layout>
        <section id="home" class="h-screen flex flex-col justify-center">
            <h1 class="text-4xl">
              I'm Hao Duong.
            </h1>
            <h2 class="text-2xl">
              Software Engineer. Mechanical Engineer. 
            </h2>
        </section>
        <section id="projects" class="h-screen flex flex-col justify-center">
            <h1 class="text-4xl">
              This is my projects...
            </h1>
            <h2 class="text-2xl">
              A showcase of my work.
            </h2>
        </section>
        <section id="experience" class="h-screen flex flex-col justify-center">
            <h1 class="text-4xl">
              These are my experiences...
            </h1>
            <h2 class="text-2xl">
              A showcase of my experiences.
            </h2>
        </section>
        <section id="contact" class="h-screen flex flex-col justify-center">
            <h1 class="text-4xl">
              Contact me here.
            </h1>
            <h2 class="text-2xl">
              My contact details.
            </h2>
        </section>
      </Layout>
    </>
  );
}
