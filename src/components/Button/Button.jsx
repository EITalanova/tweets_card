import style from './Button.module.css'

export const Button = ( { text}) => {

    return (
        <button type="button" className={style.button}>{text}</button>
    )
}