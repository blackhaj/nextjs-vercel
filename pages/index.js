import Head from 'next/head';
import Link from 'next/link';
import { getAllPostInfo } from '../lib/cosmic';
import ALink from '../components/ALink';
import Layout from '../components/Layout';
import PostCard from '../components/PostCard';
import PostFeed from '../components/PostFeed';
import Title from '../components/Title';
import SubTitle from '../components/SubTitle';

// passes a allPostsData prop to Home with the posts
export async function getStaticProps() {
  const allPostsData = await getAllPostInfo();

  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  const PostList = allPostsData.map((post) => <PostCard key={post.id} post={post} />);

  return (
    <Layout>
      <article>
        <Title title="Hi, I'm Henry" />
        <SubTitle className="text-lg">
          I am a software engineer and ex-investment consultant. I am currently building web
          applications at <ALink url="https://maze.co/">Maze</ALink>.
        </SubTitle>
      </article>
      <PostFeed>{PostList}</PostFeed>
    </Layout>
  );
}
