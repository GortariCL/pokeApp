import styles from "./ButtonMed.module.scss";

export const ButtonMed = ({children}) => {
    return (
        <div className={styles.button_medium}>
            {children}
        </div>
    )
}
