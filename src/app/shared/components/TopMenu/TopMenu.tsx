
import style from './TopMenu.module.css'

export const TopMenu = () => {
  return (
    <header>

      <div className={style['header-container']}>
        <figure className={style['header-logo']}>
          <img src="/assets/logo-kuepa.png" alt="logo" />
        </figure>

        <button className={style['sign-in-button']}>
          Ingresar
        </button>

      </div>

    </header>
  )
}
