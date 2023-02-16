import photos from "../images/photos.png";

export default function Main() {
  return (
    <div className="main">
      <img src={photos} className="photos" />
      <div className="description">
        <h1>Online Experiences</h1>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </div>
  );
}
