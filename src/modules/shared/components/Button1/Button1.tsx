import style from './Button1.module.css'

interface Button1Props {
  text: string;
  className?: string;
}

export const Button1 = ({ text, className }: Button1Props) => {
  return (
    <div className={`${style['sign-in-button']} ${className}`}>
      { text }
    </div>
  )
}
