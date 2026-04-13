/* import "./globals.css";
import styles from "./page.module.css";
import Image from "next/image";



export default function Home() {
  return (
    <main className={styles.page}>

      <header className={styles.header}>

        <section className={styles.logo}>

          <h1 className={styles.title-logo}>RESTAURANT</h1>

          <p className={styles.subtitle-logo}>De pratos clássicos a criações surpreendentes, nosso cardápio é um requinte de sabores refinados</p> 
        
        </section>
      </header>

      <main className={styles.mainContent}>
        
        <section className={styles.categorias}>

          <button className={styles.buttonCategorias}>Entradas</button>
          <button className={styles.buttonCategorias}>Massas</button>
          <button className={styles.buttonCategorias}>Carnes</button>
          <button className={styles.buttonCategorias}>Bebidas</button>
          <button className={styles.buttonCategorias}>Saladas</button>
          <button className={styles.buttonCategorias}>Sobremesas</button>

        </section>

        <section className={styles.campoDeBusca}>
          <figure className={styles.iconBusca}>
            <Image src="/lupa.png" alt="Ícone de busca" width={20} height={20}/>
          </figure>

          <input className={styles.inputBusca} type="text" placeholder="Buscar..." />
        </section>  

        <section className={styles.sectionCards}>

          <h2 className={styles.titleCards}>Cardápio</h2>
          <div className={styles.containerCards}>

          </div>
        </section>
      </main>
    </main>
  );
}
 */
'use client';
import Image from 'next/image';
import estilos from "./page.module.css";
import { useState } from "react";
import {filtrarProdutos,buscarProduto,produtosEntradas,} from "./servico";
import Cards from './componentes/Cards';
import Categorias from './componentes/Categorias';
import CampoDeBusca from './componentes/CampoDeBusca';

import Banner from "@/../public/banner.png";

export default function Home() {

  const [dadosFiltrados, setDadosFiltrados] = useState(produtosEntradas);
  const [textoBuscaDigitado, setTextoBuscaDigitado] = useState("");
  const [botaoClicado, setBotaoClicado] = useState("Entradas");

  const handleBusca = (textoDigitado) => {
    setTextoBuscaDigitado(textoDigitado);
    textoDigitado.length >= 3 && setDadosFiltrados(buscarProduto(textoDigitado));
    setBotaoClicado("");
  };

  const handleFiltro = (categoria) => {
    setTextoBuscaDigitado("");
    setDadosFiltrados(filtrarProdutos(categoria));
    setBotaoClicado(categoria);
  };

  return (
    <main className={estilos.page}>
      <header className={estilos.topo}>
        <Image src={Banner} alt="banner" />
        <div>
          <h1>RESTAURANT</h1>
          <p>
            De pratos clássicos a criações surpreendentes, nosso cardápio é um
            requinte de sabores refinados.
          </p>
        </div>
      </header>
      <main className={estilos.container_principal}>
        <Categorias
          handleFiltro={handleFiltro}
          botaoClicado={botaoClicado}
        />

        <CampoDeBusca
          textoBuscaDigitado={textoBuscaDigitado}
          handleBusca={handleBusca}
        />

        <section className={estilos.secao_cards}>
          <h2>Cardápio</h2>
          <div className={estilos.container_cards}>
            {dadosFiltrados.map((produto) => (
              <Cards key={produto.id} produto={produto}  />
            ))}
          </div>
        </section>
      </main>
    </main>
  )
}