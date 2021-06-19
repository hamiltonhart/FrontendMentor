import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Frontend Mentor Exercises</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <h1>Frontend Mentor Exercises</h1>
      </header>
      <main>
        <Link href="/stat-preview">
          <a>Stat Preview</a>
        </Link>
      </main>
    </div>
  );
}
