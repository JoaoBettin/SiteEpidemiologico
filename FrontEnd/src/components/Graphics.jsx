import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

const dadosTransformados = [
    { municipio: 'Caraguatatuba', SE16: 95,  SE17: 110, SE18: 122 },
    { municipio: 'São Sebastião', SE16: 23,  SE17: 19,  SE18: 21  },
    { municipio: 'Ilhabela',      SE16: 17,  SE17: 17,  SE18: 19  },
    { municipio: 'Ubatuba',       SE16: 423, SE17: 410, SE18: 449 },
];

const CORES = {
    SE16: "#2563EB",
    SE17: "#22C55E",
    SE18: "#F97316",
};

function CustomTooltip({ active, payload, label }) {
    if (active && payload && payload.length) {
        return (
            <div className="tooltip">
                <p className="tooltip-label">{label}</p>
                {payload.map((entry) => (
                    <p key={entry.name} className="tooltip-item" style={{ color: entry.color }}>
                        {entry.name}: <strong>{entry.value}</strong>
                    </p>
                ))}
            </div>
        );
    }
    return null;
}

function Graphics({ cidade }) {
    const dadosFiltrados = dadosTransformados.find(
        (item) => item.municipio === cidade
    );

    const dadosGrafico = dadosFiltrados
        ? [
              { semana: "SE 16", casos: dadosFiltrados.SE16 },
              { semana: "SE 17", casos: dadosFiltrados.SE17 },
              { semana: "SE 18", casos: dadosFiltrados.SE18 },
          ]
        : dadosTransformados;

    return (
        <div className="grafico-container">
            <h2 className="grafico-titulo">
                Comparativo de Casos Confirmados por Município e Semana Epidemiológica (SE)
            </h2>
            <ResponsiveContainer width="100%" height={320}>
                <BarChart
                    data={dadosGrafico}
                    margin={{ top: 10, right: 20, left: 0, bottom: 5 }}
                    barCategoryGap="25%"
                    barGap={3}
                >
                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" vertical={false} />
                    <XAxis
                        dataKey={dadosFiltrados ? "semana" : "municipio"}
                        tick={{ fontSize: 13, fill: "#6B7280" }}
                        axisLine={false}
                        tickLine={false}
                    />
                    <YAxis
                        tick={{ fontSize: 12, fill: "#6B7280" }}
                        axisLine={false}
                        tickLine={false}
                        label={{
                            value: "Número de Notificações",
                            angle: -90,
                            position: "insideLeft",
                            offset: 10,
                            style: { fontSize: 12, fill: "#9CA3AF" },
                        }}
                    />
                    <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(0,0,0,0.04)" }} />
                    <Legend
                        wrapperStyle={{ fontSize: 13, paddingTop: 12 }}
                        iconType="circle"
                        iconSize={10}
                    />

                    {dadosFiltrados ? (
                        <Bar dataKey="casos" name="Casos" fill={CORES.SE16} radius={[4, 4, 0, 0]} />
                    ) : (
                        <>
                            <Bar dataKey="SE16" name="SE 16" fill={CORES.SE16} radius={[4, 4, 0, 0]} />
                            <Bar dataKey="SE17" name="SE 17" fill={CORES.SE17} radius={[4, 4, 0, 0]} />
                            <Bar dataKey="SE18" name="SE 18" fill={CORES.SE18} radius={[4, 4, 0, 0]} />
                        </>
                    )}
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default Graphics;