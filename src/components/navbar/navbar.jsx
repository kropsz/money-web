import icons from "../../styles/icons.js"
import PropTypes from 'prop-types';
import "./navbar.css"
import { useState } from "react";
const Navbar = (props) => {

    Navbar.propTypes = {
        onClickSearch: PropTypes.func.isRequired,
        total: PropTypes.func.isRequired
    };

    const [filtro, setFiltro] = useState("")

    return <div className="navbar">
        <img src={icons.logo} alt="" />
        <div>
            {
                props.search && <>
                    <input onChange={(e) => setFiltro(e.target.value)} type="text" />
                    <button onClick={() => props.onClickSearch(filtro)} className="btn btn-blue">Buscar</button>
                </>
            }
        </div>
        <div className="dashboard">
            {
                props.total && <>
                    <div>Total de Gastos</div>
                    <div>R${props.total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</div>
                </>
            }
        </div>
    </div>
}

export default Navbar;