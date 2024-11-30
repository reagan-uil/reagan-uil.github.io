import { error, redirect } from '@sveltejs/kit';
import { posts } from './data';

export function load({ params }) {
  const post = posts.find((post) => post.path === params.slug);
  if (!post) error(404);
  return { ...post };
}
