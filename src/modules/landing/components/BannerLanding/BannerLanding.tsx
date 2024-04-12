import { useNavigate } from 'react-router-dom';
import { Button1 } from '../../../shared/components/Button1/Button1'
import style from './BannerLanding.module.css'

export const BannerLanding = () => {

  const navigate = useNavigate();

  return (
    <section className={style.banner_1}>
      <div className={style.banner_texts}>
        <h1>Queremos que logres el éxito profesional</h1>

        <p>Kuepa edu-tech</p>
        <p>prueba tecnica</p>

        <Button1 type="button" text="Registrarse" className="my-7 text-xl" onClick={() => navigate('/register')} />
      </div>

      <div className={style.circle + ' ' + style.circle_1}></div>
      <div className={style.circle + ' ' + style.circle_2}></div>
    </section>
  )
}
