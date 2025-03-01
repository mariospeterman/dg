import React from 'react';
import './Blog.css';

const Blog: React.FC = () => {
  const posts = [
    {
      id: 1,
      title: 'Die Vorteile der Hypnose',
      content: 'Entdecken Sie, wie Hypnose Ihr Leben positiv beeinflussen kann.',
    },
    {
      id: 2,
      title: 'Klangtherapie für die Seele',
      content: 'Wie Klangtherapie zu innerer Balance und Heilung beiträgt.',
    },
    {
      id: 3,
      title: 'Techniken der Tiefenentspannung',
      content: 'Erlernen Sie Methoden zur effektiven Tiefenentspannung.',
    },
  ];

  return (
    <section id="blog">
      <h2>Unser Blog</h2>
      {posts.map((post) => (
        <article key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </article>
      ))}
    </section>
  );
};

export default Blog;
