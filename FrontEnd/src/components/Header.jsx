function Header({setCidade}) { 
    return (
        <header className="header">
            <div className="header-brand">
                <div className="header-logo">
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                        <path d="M18 3 L33 30 L3 30 Z" fill="white" opacity="0.9"/>
                        <path d="M18 10 L28 28 L8 28 Z" fill="none" stroke="white" strokeWidth="1.5" opacity="0.5"/>
                    </svg>
                </div>
                <div>
                    <h1 className="header-title">Painel de Monitoramento Epidemiológico de Dengue</h1>
                    <p className="header-subtitle">UNIVESP · Projeto Integrador</p>
                </div>
            </div>
 
            <div className="header-meta">
                <div className="header-week">
                    <span className="header-week-label">Semana Epidemiológica</span>
                    <span className="header-week-value">SE 12 · 2024</span>
                </div>
            </div>
        </header>
    );
}
 
export default Header;