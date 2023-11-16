
import './App.css';
import { Carte } from './Components/Carte';
import { Description } from './Components/Description';
import { Image } from './Components/Image';
import { Name } from './Components/Name';
import Prenom from './Components/Prenom';
import { Price } from './Components/Price';
import Products from './Components/Products';


function App() {
  const user={
    prenom:"khaled",
    photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVA_HrQLjkHiJ2Ag5RGuwbFeDKRLfldnDasw&usqp=CAU",
  }
  return (
    <div className="App">
      hello
      <Name phoneName={Products.name}/>
      
      <Description phoneDescription={Products.description}/>
      <Price phonePrice={Products.price}/>
      <Image phoneImage={Products.imageUrl}/>
      <Carte phoneName={Products.name} phoneDescription={Products.description} phonePrice={Products.price} phoneImage={Products.imageUrl}/>
      <Prenom userPrenom={user.prenom} image={user.photo}/>
    </div>
  );
}

export default App;
