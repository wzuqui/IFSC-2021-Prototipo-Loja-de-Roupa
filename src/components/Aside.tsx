export function Aside() {
  return (
    <div className="aside">
      <h3 className="filter_title">FILTROS</h3>
      <h4 className="filter_subtitle_cor">COR</h4>
      <div className="cores_column">
        <div className="cores_line">
          <button className="cor preto"></button>
          <button className="cor cinza"></button>
          <button className="cor vermelho"></button>
          <button className="cor amarelo"></button>
        </div>
        <div className="cores_line">
          <button className="cor roxo"></button>
          <button className="cor rosa"></button>
          <button className="cor verde"></button>
          <button className="cor azul"></button>
        </div>
      </div>
      <h4 className="filter_subtitle">TAMANHO</h4>
      <div className="btn_tam">
        <button>PP</button>
        <button>P</button>
        <button>M</button>
        <button>G</button>
        <button>GG</button>
      </div>
      <hr />
      <h4 className="filter_subtitle">
        VALOR <span id="slider-value">R$ 0,00</span>
      </h4>
      <div className="filter_valor">
        <input
          className="slider"
          type="range"
          min="0"
          max="100"
          value="0"
          step="0.1"
        />
        <div className="row">
          <span>R$ 1,00</span>
          <span>R$ 329,00</span>
        </div>
        <hr />
      </div>
      <h4 className="filter_subtitle">GÊNERO</h4>
      <div className="filter_info">
        <input type="checkbox" />
        <label> Feminino </label>
      </div>
      <div className="filter_info">
        <input type="checkbox" />
        <label> Masculino </label>
      </div>
      <hr />
      <h4 className="filter_subtitle">MARCA</h4>
      <div className="filter_info">
        <input type="checkbox" />
        <label> Lacoste </label>
      </div>
      <div className="filter_info">
        <input type="checkbox" />
        <label> Nike</label>
      </div>
      <div className="filter_info">
        <input type="checkbox" />
        <label> Adidas </label>
      </div>
      <div className="filter_info">
        <input type="checkbox" />
        <label> Puma </label>
      </div>
      <hr />
    </div>
  );
}
