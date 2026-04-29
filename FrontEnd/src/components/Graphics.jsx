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
 
const dados = [
    { municipio: "Caraguatatuba", SE10: 325, SE11: 283, SE12: 357 },
    { municipio: "São Sebastião",  SE10: 117, SE11: 198, SE12: 242 },
    { municipio: "Ilhabela",       SE10: 38,  SE11: 47,  SE12: 63  },
    { municipio: "Ubatuba",        SE10: 82,  SE11: 107, SE12: 148 },
];
 
const CORES = {
    SE10: "#2563EB",
    SE11: "#22C55E",
    SE12: "#F97316",
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
 
function Graphics() {
    return (
        <div className="grafico-container">
            <h2 className="grafico-titulo">
                Comparativo de Casos Confirmados por Município e Semana Epidemiológica (SE)
            </h2>
            <ResponsiveContainer width="100%" height={320}>
                <BarChart
                    data={dados}
                    margin={{ top: 10, right: 20, left: 0, bottom: 5 }}
                    barCategoryGap="25%"
                    barGap={3}
                >
                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" vertical={false} />
                    <XAxis
                        dataKey="municipio"
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
                    <Bar dataKey="SE10" name="SE 10" fill={CORES.SE10} radius={[4, 4, 0, 0]} />
                    <Bar dataKey="SE11" name="SE 11" fill={CORES.SE11} radius={[4, 4, 0, 0]} />
                    <Bar dataKey="SE12" name="SE 12" fill={CORES.SE12} radius={[4, 4, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
 
export default Graphics;