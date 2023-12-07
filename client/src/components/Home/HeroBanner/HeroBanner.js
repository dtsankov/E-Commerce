import { Link } from "react-router-dom"

export const HeroBanner  = () => { 


    return(
    <section className="hero-banner-section">
        <div className="container">
            <nav>
                <li><Link to='/catalog/drill-machines'>Drill machines</Link></li>
                <li><Link to='/catalog/electrical-screwdrivers'>Electrical screwdrivers</Link></li>
                <li><Link to='/catalog/rechargable-kits'>Rechargable kits</Link></li>
                <li><Link to='/catalog/jig-saws'>Jig saws</Link></li>
                <li><Link to='/catalog/grinders'>Grinders</Link></li>
                <li><Link to='/catalog/hand-tools'>Hand tools</Link></li>
            </nav>
        </div>
    </section>    
    )
}