
import Home from "./(routes)/home/page";
import About from "./(routes)/about/page";
import Contact from "./(routes)/contact/page";
import ShopHero from "./(routes)/shop/page";

export default function Main() {
  return (
  <div>
    <Home/>
    <ShopHero/>
    <About/>
    <Contact/>
  </div>
  );
}
