import Header from "./components/Header";
import Graphics from "./components/Graphics";
import Cards from "./components/Cards";
import { useEffect, useState } from "react";

function App() {

    const cidades = ["Caraguatatuba", "São Sebastião", "Ilhabela", "Ubatuba"];
    const [cidade, setCidade] = useState(null);
    const [selecionado, setSelecionado] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const clickOutside = () => setOpen(false);
        document.addEventListener('click', clickOutside);
        return () => document.removeEventListener('click', clickOutside);
    }, []);

    return (
        <div className="container">
            <Header />
            <div className="main-content">
                <div className="dropdown">
                    <button className="dropdown-button" onClick={(e) => { e.stopPropagation(); setOpen(!open); }}>
                        {!selecionado ? 'Escolha a cidade' : cidade || 'Geral'}
                    </button>

                    {open && (
                        <div className="dropdown-menu">
                            <div className="dropdown-item" onClick={() => {
                                setCidade(null);
                                setSelecionado(true);
                                setOpen(false);
                            }}>
                                Geral
                            </div>
                            {cidades.map((c) => (
                                <div key={c} className="dropdown-item" onClick={() => {
                                    setCidade(c);
                                    setSelecionado(true);
                                    setOpen(false);
                                }}>
                                    {c}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {!selecionado ? (
                    <p className="aviso">Selecione uma cidade ou "Geral" para visualizar os dados.</p>
                ) : (
                    <>
                        <Cards cidade={cidade} />
                        <Graphics cidade={cidade} />
                    </>
                )}
            </div>
        </div>
    );
}

export default App;