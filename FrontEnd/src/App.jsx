import Header from "./components/Header";
import Graphics from "./components/Graphics";
import Cards from "./components/Cards";
import { useState } from "react";
 
function App() {

    const cidades = ["Caraguatatuba", "São Sebastião", "Ilhabela", "Ubatuba"]
    const [cidade, setCidade] = useState('Caraguatatuba');
    return (
        <div className="container">
            <Header />
            <div className="main-content">
                <h2>Escolha a cidade</h2>
                <div>
                  {cidades.map((c) => (
                    <button key={c} onClick={() => setCidade(c)}>
                      {c}
                    </button>
                  ))}
                </div>
                <Cards cidade={cidade} />
                <Graphics cidade={cidade}/>
            </div>
        </div>
    );
}
 
export default App;
