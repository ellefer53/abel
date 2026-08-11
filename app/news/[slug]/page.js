import { notFound } from "next/navigation";
import { articles } from "@/data/articles";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);

  if (!article) notFound();

  return (
    <article className="article-page">
      <header className="article-header container">
        <span className="eyebrow">{article.category}</span>
        <h1>{article.title}</h1>
        <p>{article.excerpt}</p>
        <span className="mono">{article.date} · AUTOVERSE EDITORIAL</span>
      </header>

      <div
        className="article-hero"
        style={{ backgroundImage: `url(${article.image})` }}
      />

      <div className="article-body">
        <p>
          There is a particular kind of automotive experience that cannot be
          reduced to a specification sheet. It lives in the relationship
          between driver, machine and road.
        </p>
        <h2>ENGINEERED AROUND THE DRIVER</h2>
        <p>
          The best performance cars communicate through steering, braking,
          throttle response and the small changes in chassis balance that
          appear when the pace rises. Every component becomes part of one
          continuous conversation.
        </p>
        <p>
          Power and acceleration provide useful context, but numbers are only
          the beginning. What matters is how those numbers become an experience
          behind the wheel.
        </p>
      </div>
    </article>
  );
}