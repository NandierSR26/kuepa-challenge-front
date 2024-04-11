
import { Button1 } from '../Button1/Button1'
import style from './TopMenu.module.css'
import { Link } from 'react-router-dom'

interface TopMenu {
  authButton?: boolean;
  className?: string;
}

export const TopMenu = ({ authButton = true, className }: TopMenu) => {

  return (
    <header>

      <div className={style['header-container'] + ' ' + className}>
        <figure className={style['header-logo']}>
          <img src="/assets/logo-kuepa.png" alt="logo" />
        </figure>

        {
          authButton && (
            <Link to="/login">
              <Button1 text="Ingresar" />
            </Link>
          )
        }

      </div>

    </header>
  )
}
