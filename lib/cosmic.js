import Cosmic from 'cosmicjs';
import fs from 'fs';

const api = Cosmic();
const bucket = api.bucket({
  slug: process.env.COSMIC_BUCKET_SLUG,
  read_key: process.env.COSMIC_KEY,
});

export const getAllPostInfo = async () => {
  try {
    const data = await bucket.getObjects({
      type: 'posts',
      props: 'slug,title,metadata,created_at,',
      sort: '-created_at',
    });

    return data.objects;
  } catch (error) {
    console.log('getAllPostInfo', error);
  }
};

export const getAllPostSlugs = async () => {
  const data = await bucket.getObjects({
    type: 'posts',
    props: 'slug',
    sort: '-created_at',
  });

  return data.objects.map((post) => ({
    params: {
      slug: post.slug,
    },
  }));
};

export const getPostContent = async (slug) => {
  const data = await bucket.getObject({
    slug: slug,
    props: 'slug,title,created_at,content',
  });

  return data.object;
};
