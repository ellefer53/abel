import Link from "next/link";
import { articles } from "@/data/articles";

export default function NewsPage() {
  return (
    <div className="page">
      <div className="container">
        <div className="page-header">
          <span className="eyebrow">AUTOVERSE JOURNAL</span>
          <h1>NEWS</h1>
          <p>The latest stories from performance, engineering and car culture.</p>
        </div>

        <div className="article-list">
          {articles.map((article) => (
            <Link href={"/news/" + article.slug} className="article-card" key={article.slug}>
              <div
                className="article-image"
                style={{ backgroundImage: `url(${article.image})` }}
              />
              <div className="article-content">
                <span className="eyebrow">{article.category}</span>
                <h2>{article.title}</h2>
                <p>{article.excerpt}</p>
                <span className="mono">{article.date} · READ STORY →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}