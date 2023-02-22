import './App.css';
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"





function App() {
  /* let imageGallery = [
     { src: { katie } },
     { src: { wedding } },
     { src: { bike } }
   ]
 
   const image_card = imageGallery.map(image => (
     <Card coverImg={image.coverImg} />
   )) */

  const card = data.map(item => (<Card
    key={item.id}
    coverImg={item.coverImg}
    rating={item.stats.rating}
    reviewCount={item.stats.reviewCount}
    location={item.location}
    title={item.title}
    price={item.price}

  />))

  return (
    <>
      <Navbar />
      <Hero />
      <div className='main_card'>{card}</div>

    </>
  );
}

export default App;
