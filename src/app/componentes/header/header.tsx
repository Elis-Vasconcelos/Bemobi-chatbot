import Link from "next/link";
import styles from "./header.module.css";
interface HeaderProps {
  onClose: () => void; // Propriedade para a função de fechar o modal
}

export default function Header({ onClose }: HeaderProps) {
    
    return (
      <main className={styles.main}>
        <Link href="/" onClick={onClose}>
          <h1 className={styles.home}>Volte para a Home</h1>
        </Link>
      </main>
    );
  }
  