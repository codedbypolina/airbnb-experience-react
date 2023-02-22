import star from "../images/star.png";

export default function Card(props) {
  console.log(props.openSpots);

  let badgeText;
  if (props.openSpots === 0) badgeText = "SOLD OUT";
  else if (props.location === "Online") badgeText = "ONLINE";
  return (
    <div className="card">
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <img src={props.coverImg} className="card-image" />
      <div className="card-description">
        <img src={star} alt="Star" className="star" />
        <span>
          {props.rating}{" "}
          <span className="gray">
            ({props.reviewCount}) • {props.location}
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
