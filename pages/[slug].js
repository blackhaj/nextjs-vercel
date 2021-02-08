/* eslint-disable react/prop-types */
import Head from 'next/head';
import Date from '../components/Date';
import Layout from '../components/Layout';
import Title from '../components/Title';
import { format } from 'timeago.js';
import { getAllPostSlugs, getPostContent } from '../lib/cosmic';

export async function getStaticPaths() {
  const paths = await getAllPostSlugs();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostContent(params.slug);
  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
  return (
    <Layout>
      <div className="w-full text-lg">
        <Title title={postData.title} className="mb-3" />
        <Date dateString={postData.created_at} />
        <div dangerouslySetInnerHTML={{ __html: postData.content }} />
      </div>
    </Layout>
  );
}
