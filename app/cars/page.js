import { cars } from "@/data/cars";

export default function CarsPage() {
  return (
    <div className="page">
      <div className="container">
        <div className="page-header">
          <span className="eyebrow">THE DATABASE</span>
          <h1>CARS</h1>
          <p>A compact collection of machines worth knowing.</p>
        </div>

        <div className="cars-list">
          {cars.map((car) => (
            <article className="database-card" key={car.id}>
              <div
                className="database-image"
                style={{ backgroundImage: `url(${car.image})` }}
              />
              <div className="database-info">
                <span className="eyebrow">{car.brand} · {car.category}</span>
                <h2>{car.model}</h2>
                <div className="spec-grid">
                  <div><span>YEAR</span><strong>{car.year}</strong></div>
                  <div><span>POWER</span><strong>{car.power}</strong></div>
                  <div><span>ENGINE</span><strong>{car.engine}</strong></div>
                  <div><span>0–100</span><strong>{car.zeroToHundred}</strong></div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}