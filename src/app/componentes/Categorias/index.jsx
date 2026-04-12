import Image from 'next/image';
import estilos from "./Categorias.module.css";

const icone1 = "/entrada.png";
const icone2 = "/massa.png";
const icone3 = "/carne.png";
const icone4 = "/bebidas.png";
const icone5 = "/salada.png";
const icone6 = "/sobremesa.png";

export default function Categorias({ handleFiltro, botaoClicado }) {
  return (
    <section className={estilos.secao_categorias}>
      <div className={estilos.container_botoes}>
        <button className={botaoClicado === "Entradas" ? estilos.acenderBtn : estilos.apagarBtn}
          onClick={() => handleFiltro("Entradas")}>
          <Image className={estilos.icone} src={icone1} alt="ícone" width={128} height={128} />
          <span>Entradas</span>
        </button>

        <button className={botaoClicado === "Massas" ? estilos.acenderBtn : estilos.apagarBtn}
          onClick={() => handleFiltro("Massas")}>
          <Image className={estilos.icone} src={icone2} alt="ícone" width={128} height={128} />
          <span>Massas</span>
        </button>

        <button className={botaoClicado === "Carnes" ? estilos.acenderBtn : estilos.apagarBtn}
          onClick={() => handleFiltro("Carnes")}>
          <Image className={estilos.icone} src={icone3} alt="ícone" width={128} height={128} />
          <span>Carnes</span>
        </button>
        <button className={botaoClicado === "Bebidas" ? estilos.acenderBtn : estilos.apagarBtn}
          onClick={() => handleFiltro("Bebidas")}>
          <Image className={estilos.icone} src={icone4} alt="ícone" width={128} height={128} />
          <span>Bebidas</span>
        </button>
        <button className={botaoClicado === "Saladas" ? estilos.acenderBtn : estilos.apagarBtn}
          onClick={() => handleFiltro("Saladas")}>
          <Image className={estilos.icone} src={icone5} alt="ícone" width={128} height={128} />
          <span>Saladas</span>
        </button>
        <button className={botaoClicado === "Sobremesas" ? estilos.acenderBtn : estilos.apagarBtn}
          onClick={() => handleFiltro("Sobremesas")}>
          <Image className={estilos.icone} src={icone6} alt="ícone" width={128} height={128} />
          <span>Sobremesas</span>
        </button>
      </div>
    </section>
  );
}