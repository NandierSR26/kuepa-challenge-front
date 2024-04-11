
import { Button1 } from '../Button1/Button1'
import style from './TopMenu.module.css'
import { Link } from 'react-router-dom'

export const TopMenu = () => {


  return (
    <header>

      <div className={style['header-container']}>
        <figure className={style['header-logo']}>
          <img src="/assets/logo-kuepa.png" alt="logo" />
        </figure>

        <Link to="/login">
          <Button1 text="Ingresar" />
        </Link>

      </div>

    </header>
  )
}
