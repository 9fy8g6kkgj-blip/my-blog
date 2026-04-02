import postsData from "@/data/posts.json";
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = postsData.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article style={{ marginTop: '3rem', maxWidth: '700px', margin: '3rem auto 0' }}>
      <header style={{ marginBottom: '4rem', textAlign: 'center' }}>
        <div style={{
          display: 'inline-block',
          backgroundColor: 'var(--accent-soft)',
          color: 'var(--accent)',
          padding: '0.2rem 0.8rem',
          fontSize: '0.8rem',
          fontWeight: '600',
          borderRadius: '3px',
          marginBottom: '1.5rem',
          textTransform: 'uppercase'
        }}>
          {post.category}
        </div>
        <h1 className="entry-title" style={{ fontSize: '3rem', marginBottom: '1rem' }}>{post.title}</h1>
        <time className="entry-date" style={{ fontSize: '1.1rem' }}>{post.date}</time>
      </header>

      <div className="entry-content" style={{ whiteSpace: 'pre-wrap', marginBottom: '5rem' }}>
        {post.content}
      </div>

      <div style={{ borderTop: '1px solid var(--divider)', paddingTop: '2rem', textAlign: 'center' }}>
        <Link href="/" style={{
          fontSize: '0.95rem',
          fontWeight: '600',
          color: '#888',
          textDecoration: 'underline',
          textUnderlineOffset: '4px'
        }}>
          ← 기록 목록으로 돌아가기
        </Link>
      </div>
    </article>
  );
}
