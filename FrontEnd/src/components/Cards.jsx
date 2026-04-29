function Cards () {
    const dados = [
        {titulo: "Casos confirmados", valor: "*"},
        {titulo: "Número de óbitos", valor: "*"},
        {titulo: "Incidência", valor: "*"},
        {titulo: "Letalidade", valor: "*"},
    ];
    
    return (
        <div className="cards">
            {dados.map((card, index) => (
                <div key={index} className="card">
                    <h3>{card.titulo}</h3>
                    <p>{card.valor}</p>
                </div>
            ))}
        </div>
    );
}

export default Cards;