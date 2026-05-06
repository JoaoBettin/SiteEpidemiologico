import Header from "./components/Header";
import Graphics from "./components/Graphics";
import Cards from "./components/Cards";
import { useEffect, useState } from "react";

function App() {

    const cidades = ["Caraguatatuba", "São Sebastião", "Ilhabela", "Ubatuba"]
    const [cidade, setCidade] = useState(null);
    const [open, setOpen] = useState(false);
    useEffect(() => {
      const clickOutside = () => setOpen(false);
      document.addEventListener('click', clickOutside);
      return () => document.removeEventListener('click', clickOutside);
    }, [])
    return (
        <div className="container">
            <Header />
            <div className="main-content">
                <div className="dropdown">
                    <button className="dropdown-button" onClick={(e) => {e.stopPropagation(); setOpen(!open)} }>
                      {cidade || 'Escolha a cidade'}
                    </button>

                    {open && (
                      <div className="dropdown-menu">
                        {cidades.map ((c) => (
                          <div key={c} className="dropdown-item" onClick={() => {
                            setCidade(c);
                            setOpen(false);
                          }}
                          >
                            {c}
                          </div>
                        ))}
                      </div>
                    )}
                </div>
                <Cards cidade={cidade} />
                <Graphics cidade={cidade}/>
            </div>
        </div>
    );
}
 
export default App;
