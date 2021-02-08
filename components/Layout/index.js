import CenteredColumn from '../CenteredColumn';
import Header from '../Header';

import Head from 'next/head';
export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Henry Black</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        {/* <meta property="og:title" content="My page title" key="title" /> */}
      </Head>
      <div
        className={
          'flex flex-col min-h-screen h-full w-screen border-yellow-500 bg-gray-900 font-sans text-white'
        }
      >
        <Header />
        <CenteredColumn>{children}</CenteredColumn>
      </div>
    </>
  );
}
