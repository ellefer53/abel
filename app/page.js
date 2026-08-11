import Link from "next/link";
import { cars } from "@/data/cars";
import { articles } from "@/data/articles";

export default function Home() {
  const featured = articles[0];
  return (
    <>
      <section className="hero">
        <div className="hero-overlay" />
        <div className="container hero-content">
          <span className="eyebrow">AUTOMOTIVE MEDIA · 2026</span>
          <h1>THE MACHINES<br />THAT DEFINE<br /><i>A GENERATION.</i></h1>
          <p>Stories about performance, engineering, culture and the cars that move us.</p>
          <Link className="button" href="/news">EXPLORE STORIES →</Link>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">EDITORIAL</span>
              <h2>FEATURED STORY</h2>
            </div>
            <span className="mono">01 / 03</span>
          </div>

          <Link href={"/news/" + featured.slug} className="feature-card">
            <div className="feature-image" style={{ backgroundImage: `url(${featured.image})` }} />
            <div className="feature-content">
              <span className="eyebrow">{featured.category}</span>
              <h3>{featured.title}</h3>
              <p>{featured.excerpt}</p>
              <span className="mono">{featured.date} · 8 MIN READ</span>
            </div>
          </Link>
        </div>
      </section>

      <section className="section dark-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">THE DATABASE</span>
              <h2>THE MACHINES</h2>
            </div>
            <Link className="mono link-arrow" href="/cars">VIEW ALL →</Link>
          </div>

          <div className="car-grid">
            {cars.slice(0, 3).map((car) => (
              <Link href="/cars" className="car-card" key={car.id}>
                <div className="car-image" style={{ backgroundImage: `url(${car.image})` }} />
                <div className="car-info">
                  <span className="eyebrow">{car.brand}</span>
                  <h3>{car.model}</h3>
                  <div className="car-meta">
                    <span>{car.year}</span>
                    <span>{car.power}</span>
                    <span>{car.category}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}