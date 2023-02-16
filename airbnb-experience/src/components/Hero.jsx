import photos from "../images/photos.png";

export default function Hero() {
  return (
    <section className="hero">
      <img src={photos} className="photos" />
      <div className="description">
        <h1 className="hero-heading">Online Experiences</h1>
        <p className="hero-text">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </section>
  );
}
