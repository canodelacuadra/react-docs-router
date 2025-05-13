import { NavLink } from 'react-router-dom';
import { temas } from '../data/temas';

export default function Navbar() {
    return (
        <nav>
            <NavLink to="/">Inicio</NavLink>
            {' | '}
            {temas.map((t) => (

                <NavLink
                    key={t.id}
                    to={`/doc/${t.id}`}
                    className={({ isActive }) => (isActive ? 'active' : '')}
                >
                    {t.nombre} 
                </NavLink>


            ))}
        </nav>
    );
}

