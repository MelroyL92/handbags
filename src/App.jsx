import './App.css'
import Button from "./components/Button/Button.jsx";
import BagsCollection from "./components/Bags/Bags.jsx";
import FooterInformation from "./components/FooterInformation/FooterInformation.jsx";
import FooterImage from "./components/FooterImage/FooterImage.jsx";

function App() {




  return (
      <>
      <h1>Handbags & Purses</h1>

          <Button
                disabled ={false}
                className = "To the collection"
              />
          <Button
              disabled={false}
              className="Shop all bags"
              />
          <Button
              disabled={true}
              className="Pre-orders"
          />
       <main>
            <BagsCollection
                labelID = "Best seller"
                img = "bag1"
                title = "the handy bag"
                price = "€400"
            />
           <BagsCollection
               labelID = "Best seller"
               img = "bag2"
               title = "the stylish bag"
               price = "€250"
           />
           <BagsCollection
               labelID = "New collection"
               img = "bag3"
               title = "the simple bag"
               price = "€300"
           />
           <BagsCollection
               labelID = "New collection"
               img = "bag4"
               title = "the trendy"
               price = "€150"
           />
       </main>
        <footer>
            <FooterInformation
            title="The brand"
            sectionText= "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea esse mollitia nostrum similique. Corporis, facilis hic itaque iusto magnam mollitia quibusdam reiciendis sed voluptatem! Amet, architecto commodi culpa deserunt distinctio dolore dolorum eos fugiat fugit id in iste labore minima molestiae nesciunt nisi officia, perferendis provident quos, repudiandae rerum veniam."
            />
            <FooterImage
            img = "brand"
            />
            <FooterImage
            img = "our story"
            />
            <FooterInformation
            title = "Our story"
            sectionText= "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad autem corporis cupiditate debitis dolore, dolores esse et eveniet, exercitationem illum ipsam iste laboriosam maiores minima modi rem repellat sunt suscipit. Maxime officia, voluptatem. A aperiam, cum ea enim facilis molestiae officia officiis perspiciatis quidem quis quod quos reiciendis, rem, totam!"
            />
        </footer>
      </>
  )
}

export default App
