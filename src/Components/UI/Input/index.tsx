import style from './style.module.css';

type Props = {
    label?: string | null,
    placeHolder?: string,
    type: string,
    id?: string,
    isError?: boolean,
    isRequire?: boolean,
    inputName?: string,
    name: string,
    isChecked?:false
}

const Input = ({ label,isChecked, name, placeHolder, type, id, isError = false, isRequire = false, inputName }: Props) => {
    const inputClass = `${style[inputName as string]} ${isError ? style.inputError : ''}`;

    if (type === 'radio') {
        return (
            <div className={style.radioInput}>
                <input type={type} checked={isChecked} name={name} id={id} className={style.radioButton} />
                <label htmlFor={id} className={style.radioLabel}>{label}</label>
            </div>
        );
    }

    return (
        <div className={style.inputWrapper}>
            <div className={style.labelWrapper}>
                {label && <label htmlFor={id} className={`${style.label} ${isError ? style.labelError : ''}`}>{label}</label>}
                {isError && <p className={style.textError}>Wrong format</p>}
            </div>
            <input
                type={type}
                placeholder={placeHolder}
                id={id}
                required={isRequire}
                className={inputClass}
            />
        </div>
    );
}

export default Input;
