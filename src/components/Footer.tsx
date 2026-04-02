export default function Footer() {
  return (
    <footer style={{
      padding: '4rem 0 2rem',
      textAlign: 'center',
      borderTop: '1px solid var(--divider)',
      marginTop: '4rem',
      color: '#aaa',
      fontSize: '0.8rem',
      letterSpacing: '0.05em'
    }}>
      <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', marginBottom: '0.5rem' }}>
        "Every moment is a piece of art."
      </p>
      <p>© {new Date().getFullYear()} alstjd. All rights reserved.</p>
    </footer>
  );
}
