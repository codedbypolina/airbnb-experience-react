import katie from "../images/katie-zaferes.png";
import star from "../images/star.png";

export default function Card(props) {
  return (
    <div className="card">
      <img src={katie} className="card-image" alt="Katie Zaferes" />
      <div className="card-description">
        <img src={star} alt="Star" />
        <span>
          {props.rating}{" "}
          <span className="gray">
            ({props.reviewCount}) {props.country}
          </span>
        </span>
        <p>{props.title}</p>
        <p>
          <span className="bold">From ${props.price}</span> / person
        </p>
      </div>
    </div>
  );
}
