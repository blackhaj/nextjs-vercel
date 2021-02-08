import GhostContentAPI from '@tryghost/content-api';
import fs from 'fs';

const getGhostPosts = () => {
  const api = new GhostContentAPI({
    url: process.env.GHOST_URL,
    key: process.env.GHOST_CONTENT_KEY,
    version: process.env.GHOST_VERSION,
  });

  const postsObj = [];

  // fetch 5 posts, including related tags and authors
  api.posts
    .browse({ include: 'tags,authors' })
    .then((posts) => {
      posts.forEach((post, index) => {
        postsObj.push({
          order: index,
          slug: post.slug,
          title: post.title,
          content: post.html,
          metafields: [
            {
              children: null,
              type: 'textarea',
              title: 'Snippet',
              key: 'snippet',
              id: 'wepnyvkaoz0tpwfwuca6',
              value: post.excerpt,
            },
            {
              children: null,
              type: 'switch',
              title: 'Featured',
              key: 'featured',
              id: 'tnh48ixpnj8gfkrivmug',
              value: post.featured,
              options: 'yes,no',
            },
          ],
          bucket: '601f137b28dde4000826937e',
          type_slug: 'ghost-posts',
          created_at: post.created_at,
          created_by: '601f134b28dde4000826937c',
          modified_at: post.updated_at,
          created: post.created_at,
          user_id: '601f134b28dde4000826937c',
          options: { content_editor: 1, slug_field: 1 },
          status: 'published',
          thumbnail: '',
        });
      });
      fs.writeFileSync('posts-extract.json', JSON.stringify(postsObj));
    })
    .catch((err) => {
      console.error(err);
    });
};

export default getGhostPosts;
