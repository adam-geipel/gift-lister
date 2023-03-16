
import navbarStyles from './navbar.module.scss';

export default function Navbar() {
    return (
            <div className={navbarStyles.header}>
                <h1>Gift Lister</h1>
                <h2>A little gift list aggregator</h2>
            </div>
    )
}