
import { useContext } from 'react';
import { Button1 } from '../Button1/Button1'
import style from './TopMenu.module.css'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../../context/auth/AuthContext';

interface TopMenu {
  authButton?: boolean;
  className?: string;
}

export const TopMenu = ({ authButton = true, className }: TopMenu) => {

  const { logged } = useContext(AuthContext);
  console.log({logged})

  return (
    <header>

      <div className={style['header-container'] + ' ' + className}>
        <figure className={style['header-logo']}>
          <img src="/assets/logo-kuepa.png" alt="logo" />
        </figure>

        {
          (authButton && logged === 'no') && (
            <Link to="/login">
              <Button1 type="button" text="Ingresar" />
            </Link>
          )
        }

        {
          (authButton && logged === 'yes') && (
            <Link to="/login">
              <Button1 type="button" text="Cerrar Sesion" />
            </Link>
          )
        }

      </div>

    </header>
  )
}
