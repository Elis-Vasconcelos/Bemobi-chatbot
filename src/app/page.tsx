{/*import BillingPage from "./componentes/BillingPage";*/}
import styles from "./page.module.css";
import ButtonChat from "./componentes/chatbot/chat";


export default function Home() {
  return (
    <main className={styles.main}>
      {/*<BillingPage />*/}
      <ButtonChat/>
    </main>
  );
}
