import styles from './center.module.css'

export default function Center() {
    return (
        <>
            <div className={styles.center}>
                <div className={styles.Tittle}>
                    <h1 className={styles.tittle}>Olá! Eu sou o Omni Bot.</h1>
                    <h1 className={styles.tittle}>Como posso te ajudar hoje?</h1>
                </div>
                <div className={styles.messages}>
                    <div className={styles.mymessage}>
                        <p>Olá!</p>
                    </div>
                </div>
                <div className={styles.Messages}>
                    <div className={styles.botMessage}>
                        <p>Olá, Fulano! O que posso fazer por você hoje?</p>
                    </div>
                </div>

                <div className={styles.Input}>
                    <div className={styles.inputContainer}>
                        <input
                            type="text"
                            placeholder="Envie uma mensagem..."

                        />
                        <button >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="24"
                                width="24"
                                viewBox="0 0 24 24"
                                fill="#fff"
                            >
                                <path d="M2 21l21-9L2 3v7l15 2-15 2z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}