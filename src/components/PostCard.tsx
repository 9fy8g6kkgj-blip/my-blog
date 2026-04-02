import Link from 'next/link';

interface PostCardProps {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  category: string;
}

export default function PostCard({ slug, title, date, excerpt, category }: PostCardProps) {
  return (
    <article style={{
      marginBottom: '3.5rem',
      paddingBottom: '3.5rem',
      borderBottom: '1px solid var(--divider)',
      position: 'relative'
    }}>
      <div style={{
        display: 'inline-block',
        backgroundColor: 'var(--accent-soft)',
        color: 'var(--accent)',
        padding: '0.2rem 0.6rem',
        fontSize: '0.75rem',
        fontWeight: '600',
        borderRadius: '3px',
        marginBottom: '1rem',
        textTransform: 'uppercase',
        letterSpacing: '0.05em'
      }}>
        {category}
      </div>
      
      <Link href={`/posts/${slug}`}>
        <h2 style={{
          fontSize: '1.85rem',
          lineHeight: '1.3',
          marginBottom: '0.75rem',
          color: '#2a2a2a',
          cursor: 'pointer'
        }}>
          {title}
        </h2>
      </Link>
      
      <span style={{
        fontFamily: 'var(--font-serif)',
        fontStyle: 'italic',
        color: '#999',
        fontSize: '0.95rem',
        display: 'block',
        marginBottom: '1.25rem'
      }}>
        {date}
      </span>
      
      <p style={{
        color: '#666',
        fontSize: '1.05rem',
        lineHeight: '1.7',
        maxWidth: '100%',
        display: '-webkit-box',
        WebkitLineClamp: '2',
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden'
      }}>
        {excerpt}
      </p>
      
      <Link href={`/posts/${slug}`} style={{
        display: 'inline-block',
        marginTop: '1.5rem',
        fontSize: '0.9rem',
        fontWeight: '600',
        borderBottom: '1px solid var(--accent)',
        paddingBottom: '2px'
      }}>
        기록 읽기
      </Link>
    </article>
  );
}
