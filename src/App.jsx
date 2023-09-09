import './App.css'
import Button from "./components/Button/Button.jsx";
import BagsCollection from "./components/Bags/Bags.jsx";

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

      </>
  )
}

export default App
