interface Props {
  Foto: string;
  Titulo: string;
  Valor: string;
}

export function CardProduct(props: Props) {
  return (
    <div className="card">
      <div className="imgdiv">
        <img src={props.Foto} alt="Imagem Produto" />
      </div>
      <div className="info">
        <div>
          <h4>{props.Titulo}</h4>
          <span>{props.Valor}</span>
        </div>
        <div>
          <a href="exemploproduto.html">Visualizar</a>
          <a href="carrinho.html"> Comprar </a>
        </div>
      </div>
    </div>
  );
}
