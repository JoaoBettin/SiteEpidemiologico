import logo from "../assets/univesp_logo.png"

function Header({setCidade}) { 
    return (
        <header className="header">
            <div className="header-brand">
                <div className="header-logo">
                    <img src={logo} alt="" className="logo-image" />
                </div>
                <div>
                    <h1 className="header-title">Painel de Monitoramento Epidemiológico de Dengue</h1>
                    <p className="header-subtitle">UNIVESP · Projeto Integrador</p>
                </div>
            </div>
 
            <div className="header-meta">
                <div className="header-week">
                    <span className="header-week-label">Semana Epidemiológica</span>
                    <span className="header-week-value">SE 16 · SE 17 · SE 18 · 2026</span>
                </div>
            </div>
        </header>
    );
}
 
export default Header;