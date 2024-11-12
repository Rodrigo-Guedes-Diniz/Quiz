import styles from "./style.module.css";

interface AlternativaProps {
    label: string;
    order: number;
}

export function Alternativa(props: AlternativaProps) {
    const id = `alternativa-${props.order}`;
    return(
        <>
        <input
                tabIndex={-1}
                type="radio" 
                id={id} 
                name="alternativa"
                defaultValue={props.order}
                className={styles.input}
            /> 
        <label htmlFor={id} className={styles.component} tabIndex={0}>
        {props.label}
        </label>
        </>
    );
}