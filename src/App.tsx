import { Aside } from './components/Aside';
import { CardProduct } from './components/CardProduct';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { produtos } from './services/produto-service';

function App() {
  return (
    <>
      <Header />
      <div className="content">
        <Aside />

        <div className="container">
          {produtos.map((item, index) => (
            <>
              <h3 className="title" key={index}>
                <img src={item.Logo} alt="" className="logo-home" />
              </h3>
              <div className="cardrow">
                {item.Itens.map((subItem, subIndex) => (
                  <CardProduct key={subIndex} {...subItem} />
                ))}
              </div>
            </>
          ))}
        </div>
      </div>
      <Footer />
      <div id="snackbar"></div>
    </>
  );
}

export default App;
