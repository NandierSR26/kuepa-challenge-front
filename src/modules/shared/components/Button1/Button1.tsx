import style from './Button1.module.css'

interface Button1Props {
  type: "button" | "submit" | "reset" | undefined;
  text: string;
  className?: string;
  onClick?: () => void;
}

export const Button1 = ({ text, className, onClick, type = "button" }: Button1Props) => {
  return (
    <button
      className={`${style['sign-in-button']} ${className}`}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  )
}
