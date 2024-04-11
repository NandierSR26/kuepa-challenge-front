import style from './TextIunput.module.css'

interface TextInputProps {
  type: string
  label?: string
  name?: string
  placeholder?: string;
  className?: string
  onChange?: any
  value: any
  touched?: any
  errors?: any
}

export const TextIunput = ({ type, label, name, onChange, value, touched, errors, placeholder, className }: TextInputProps) => {
  return (
    <div className={`${style.input_container} ${className && className}`}>
      {
        label && <label
          htmlFor={name}
          className={style.input_label}
        >
          {label}
        </label>
      }

      <div className={`${ style.input_box }`}>
        <input
          type={type}
          name={name}
          placeholder={placeholder && placeholder}
          onChange={onChange}
          value={value}
        />
      </div>
      {
        (errors && touched)
        && <span className="text-white bg-pink-500 text-sm text-center py-1 rounded-3xl font-semibold w-full mt-1">{errors}</span>
      }
    </div>
  )
}
