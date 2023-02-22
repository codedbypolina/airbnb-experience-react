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
    item={item}

  />))

  return (
    <>
      <Navbar />
      <Hero />
      <section className='main_card'>{card}</section>

    </>
  );
}

export default App;
