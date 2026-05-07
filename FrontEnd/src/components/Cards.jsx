import { useEffect, useState } from "react";

const cidades = ["Caraguatatuba", "São Sebastião", "Ilhabela", "Ubatuba"];

function CardGeral() {
    const [dados, setDados] = useState([]);

    useEffect(() => {
        Promise.all(
            cidades.map((c) =>
                fetch(`https://siteepidemiologico-production.up.railway.app/dashboard?cidade=${c}`)
                    .then((res) => res.text())
                    .then((data) => ({ cidade: c, ...JSON.parse(data) }))
                    .catch(() => null)
            )
        ).then((resultados) => setDados(resultados.filter(Boolean)));
    }, []);

    if (!dados.length) return <p>Carregando...</p>;

    return (
        <div className="cards-geral">
            {dados.map((d, index) => (
                <div key={index} className="card-geral">
                    <h3 className="card-geral-cidade">{d.cidade}</h3>
                    <div className="card-geral-info">
                        <div>
                            <span className="card-titulo">Casos Confirmados</span>
                            <p className="card-valor" style={{ color: "#0B5EB7" }}>{d.casos}</p>
                        </div>
                        <div>
                            <span className="card-titulo">Incidência</span>
                            <p className="card-valor" style={{ color: "#E67E22" }}>{d.incidencia}</p>
                            <span className="card-unidade">por 100k hab.</span>
                        </div>
                         <div>
                            <span className="card-titulo">Número de Óbitos</span>
                            <p className="card-valor" style={{ color: "#C0392B" }}>{d.obitos}</p>
                        </div>
                        <div>
                            <span className="card-titulo">Letalidade</span>
                            <p className="card-valor" style={{ color: "#8E44AD" }}>{d.letalidade}%</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

function Cards({ cidade }) {
    const [dados, setDados] = useState(null);

    useEffect(() => {
        if (cidade === null) return;
        fetch(`https://siteepidemiologico-production.up.railway.app/dashboard?cidade=${cidade}`)
            .then((res) => res.text())
            .then((data) => {
                try {
                    setDados(JSON.parse(data));
                } catch (e) {
                    console.error("Erro ao parsear JSON:", e);
                }
            })
            .catch((err) => console.error("ERRO FETCH:", err));
    }, [cidade]);

    if (cidade === null) return <CardGeral />;
    if (!dados) return <p>Carregando...</p>;

    const cards = [
        { titulo: "Casos Confirmados", valor: dados.casos, cor: "#0B5EB7" },
        { titulo: "Número de Óbitos", valor: dados.obitos, cor: "#C0392B" },
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