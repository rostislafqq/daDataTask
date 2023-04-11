import { Igeolocation } from "../../types/geolocation"
import s from './geolocation.module.scss'
import { Link } from 'react-router-dom';

const Geolocation:React.FC<Igeolocation> = ({lon,lat,town})=>{
    return(
        <div className={s.geolocation}>
            <div className={s.containerGeolocation}>
                <h1>Город:{town}</h1>
                <p>Долгота:{lon}</p>
                <p>Широта:{lat}</p>
            </div>
            <Link to='/combobox'>Предыдущее задание</Link>
        </div>
    )
}

export default Geolocation