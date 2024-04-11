import { Button1 } from '../../../shared/components/Button1/Button1'
import style from './BannerLanding.module.css'

export const BannerLanding = () => {
  return (
    <section className={style.banner_1}>
      <div className={style.banner_texts}>
        <h1>Queremos que logres el éxito profesional</h1>

        <p>Kuepa edu-tech</p>
        <p>prueba tecnica</p>

        <Button1 text="Registrarse" className="my-7 text-xl" />
      </div>

      <div className={style.circle + ' ' + style.circle_1}></div>
      <div className={style.circle + ' ' + style.circle_2}></div>
    </section>
  )
}
