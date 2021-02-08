import Cosmic from 'cosmicjs';

const api = Cosmic();
const bucket = api.bucket({
  slug: process.env.COSMIC_BUCKET_SLUG,
  read_key: process.env.COSMIC_KEY,
});

export const getAllPostInfo = async () => {
  const data = await bucket.getObjects({
    type: 'ghost-posts',
    props: 'slug,title,metadata,created_at',
    sort: '-created_at',
  });

  return data.objects;
};

export const getAllPostSlugs = async () => {
  const data = await bucket.getObjects({
    type: 'ghost-posts',
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
