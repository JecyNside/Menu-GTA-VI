import Background from "./assets/imgs/background.webp";
import Header from "./components/Header";

function App() {

  return (
    <main>
      <Header/>
      <img className="background" src={Background} alt="background"/>
    </main>
  );
}

export default App;
