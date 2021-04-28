import './App.css';
import Top from './component/topbar.js'
import Cities from './component/Explore.js'
import Nava from './component/navbar.js'
import Carts from './component/partout.js'
import Experiences from './component/expériences.js'
import Foot from './component/footer.js'
function App() {
  return (
    <div className="App">
   <section className="top"><Top /></section> 
   <Nava />
   <Cities/>
   <Carts />
   <Experiences />
   <Foot />
    </div>
  );
}

export default App;
