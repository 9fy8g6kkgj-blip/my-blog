import postsData from "@/data/posts.json";
import PostCard from "@/components/PostCard";

export default function Home() {
  return (
    <div style={{ marginTop: '2rem' }}>
      <header style={{ marginBottom: '5rem', borderLeft: '4px solid var(--accent)', paddingLeft: '1.5rem' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem', fontWeight: '800' }}>나의 소소한 일상</h1>
        <p style={{ color: '#666', fontSize: '1.1rem', maxWidth: '500px', lineHeight: '1.6' }}>
          매일의 기분과 소박한 조각들을 담아두는 따뜻한 공간입니다. <br />
          언제든지 편하게 들러 쉬어 가세요.
        </p>
      </header>

      <section>
        {postsData.map((post) => (
          <PostCard 
            key={post.slug}
            slug={post.slug}
            title={post.title}
            date={post.date}
            excerpt={post.excerpt}
            category={post.category}
          />
        ))}
      </section>
    </div>
  );
}

