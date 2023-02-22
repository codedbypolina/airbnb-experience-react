import star from "../images/star.png";

export default function Card(props) {
  console.log(props.item.openSpots);

  let badgeText;
  if (props.openSpots === 0) badgeText = "SOLD OUT";
  else if (props.item.location === "Online") badgeText = "ONLINE";
  return (
    <div className="card">
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <img src={props.item.coverImg} className="card-image" />
      <div className="card-description">
        <img src={star} alt="Star" className="star" />
        <span>
          {props.item.stats.rating}{" "}
          <span className="gray">
            ({props.item.stats.reviewCount}) • {props.item.location}
          </span>
        </span>
        <p>{props.item.title}</p>
        <p>
          <span className="bold">From ${props.item.price}</span> / person
        </p>
      </div>
    </div>
  );
}
