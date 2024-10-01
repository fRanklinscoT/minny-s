import ImageSection from "./Sections/ImageSection";
import Products from "./Sections/products";
import IconSection from "./Sections/allyouneed"
import Faq from "./Sections/faq";
import Ratings from "./Sections/ratings"

const Body = () => {
  return(
    <div>
      <div className="split-container">
        <ImageSection />
      </div>
      <Products />
      <IconSection />
      <Faq />
      <Ratings />
    </div>
  )
}

export default Body;
