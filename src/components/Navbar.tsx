import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{
      padding: '2.5rem 0 4rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <Link href="/" style={{ 
        fontSize: '1.75rem', 
        fontWeight: '700', 
        color: '#2a2a2a',
        letterSpacing: '-0.02em',
        fontFamily: 'var(--font-serif)'
      }}>
        오늘의 조각 <span style={{ fontSize: '0.9rem', fontWeight: '400', color: '#888', fontStyle: 'italic', marginLeft: '0.5rem' }}>Daily Pieces</span>
      </Link>
      
      <div style={{ display: 'flex', gap: '2rem' }}>
        <Link href="/" style={{ color: '#666', fontSize: '0.95rem', fontWeight: '500' }}>Blog</Link>
        <Link href="/" style={{ color: '#666', fontSize: '0.95rem', fontWeight: '500' }}>About</Link>
      </div>
    </nav>
  );
}
