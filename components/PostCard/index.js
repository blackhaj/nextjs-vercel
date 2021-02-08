import { format } from 'timeago.js';
import Link from 'next/link';

export default function PostCard({ post }) {
  const snippet = post.metadata.snippet.slice(0, 200);
  return (
    <div className="w-full mb-3 p-2 cursor-pointer">
      <Link href={`${post.slug}`}>
        <div>
          <h2 className="text-lg text-blue-500">{post.title}</h2>
          <div className="text-base text-justify">
            {snippet}
            {snippet.length === 200 ? '...' : ''}
          </div>
          <div className="text-base text-gray-500">{format(post.created_at)}</div>
        </div>
      </Link>
    </div>
  );
}
