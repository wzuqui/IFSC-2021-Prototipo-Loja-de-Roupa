export function Header() {
  return (
    <header>
      <a href="index.html">
        <img src="icons/LogoPronta.svg" alt="Bom Look Logo" className="logo" />
      </a>
      <div>
        <form className="search">
          <input type="text" placeholder="O que você procura?" />
          <button type="submit">
            <img src="icons/searchbtn.svg" style={{ width: '2rem' }} />
          </button>
        </form>
        <a href="login.html">
          <img src="icons/user-solid.svg" style={{ width: '3rem' }} />
        </a>
        <a href="carrinho.html">
          <img src="icons/cart-shopping.svg" style={{ width: '3rem' }} />
        </a>
      </div>
    </header>
  );
}
