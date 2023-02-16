import katie from "../images/katie-zaferes.png";
import star from "../images/star.png";

export default function Card() {
  return (
    <div className="card">
      <img src={katie} className="card-image" alt="Katie Zaferes" />
      <div className="card-description">
        <img src={star} alt="Star" />
        <span>
          5.0 <span className="gray">(6) USA</span>
        </span>
        <p>Life lessons with Katie Zaferes</p>
        <p>
          <span className="bold">From $136</span> / person
        </p>
      </div>
    </div>
  );
}
