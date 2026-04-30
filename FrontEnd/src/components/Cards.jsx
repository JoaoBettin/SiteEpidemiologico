import { useEffect, useState } from "react";

function Cards({cidade}) {
    const [dados, setDados] = useState(null);
    
    useEffect (() => {
        fetch(`https://siteepidemiologico-production.up.railway.app/dashboard?cidade=${cidade}`)
        .then(res => {
            console.log("STATUS:", res.status);
            return res.text(); // 👈 troca pra text
        })
        .then(data => {
            console.log("RESPOSTA:", data);
            try {
                setDados(JSON.parse(data));
            } catch (e) {
                console.error("Erro ao parsear JSON:", e);
            }
        })
        .catch(err => console.error("ERRO FETCH:", err));
}, [cidade]);

    if (!dados) return <p>Carregando...</p>

    const cards = [
    { titulo: "Casos Confirmados", valor: dados.casos, cor: "#0B5EB7" },
    { titulo: "Número de Óbitos",  valor: dados.obitos, cor: "#C0392B" },
    { titulo: "Incidência", valor: dados.incidencia, unidade: "por 100k hab.", cor: "#E67E22" },
    { titulo: "Letalidade", valor: `${dados.letalidade}%`, cor: "#8E44AD" },
];

    return (
        <div className="cards">
            {cards.map((card, index) => (
                <div key={index} className="card">
                    <div className="card-accent" style={{ background: card.cor }} />
                    <h3 className="card-titulo">{card.titulo}</h3>
                    <p className="card-valor" style={{ color: card.cor }}>
                        {card.valor}
                    </p>
                    {card.unidade && (
                        <span className="card-unidade">{card.unidade}</span>
                    )}
                </div>
            ))}
        </div>
    );
}
 
export default Cards;