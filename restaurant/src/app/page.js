import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>

      <main className={styles.main}>

        <header className={styles.header}>

          <section className={styles.logo}>

            <h1 className={styles.title-logo}>RESTAURANT</h1>

            <p className={styles.subtitle-logo}>De pratos clássicos a criações surpreendentes, nosso cardápio é um requinte de sabores refinados</p> 
          
          </section>
        </header>

        <main className={styles.mainContent}>
          <section className={styles.categorias}>

          </section>
          <section className={styles.campoDeBusca}>

          </section>  
          <section className={styles.sectionCards}>
            <h2 className={styles.titleCards}>Cardápio</h2>
            <div className={styles.containerCards}>

            </div>
          </section>
        </main>
      </main>
    </div>

  );
}
