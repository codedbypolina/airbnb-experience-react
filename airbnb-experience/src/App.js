import './App.css';
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import katie from "./images/katie-zaferes.png";
import data from "./data"



function App() {
  const card = data.map(x => (<Card
    coverImg={x.coverImg}
    rating={x.stats.rating}
    reviewCount={x.stats.reviewCount}
    location={x.location}
    title={x.title}
    price={x.price}

  />))

  return (
    <>
      <Navbar />
      <Hero />
      <div>{card}</div>

    </>
  );
}

export default App;
