import styles from "./style.module.css";

interface AlternativaProps {
    label: string;
    order: number;
}

export function Alternativa(props: AlternativaProps) {
    return(
        <label className={styles.component}>
            <input type="radio" 
                id={`alternativa-${props.order}`} 
                name="alternativa"
            />
        {props.label}
        </label>
    );
}