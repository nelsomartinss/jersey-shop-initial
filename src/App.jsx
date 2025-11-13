import "./App.css"; // importando css do arquivo

// os componentes são basicamente funções
function App() {
  const items = [
    {
      id: 1,
      photo: "real_madrid.webp",
      name: "Real Madrid",
      price: 119.99,
      active: false,
      quantity: 1,
      isInBag: true, // exemplo para a render condicional
    },
    {
      id: 2,
      photo: "milan.png",
      name: "Milan",
      price: 99.99,
      active: false,
      quantity: 1,
      isInBag: false,
    },
    {
      id: 3,
      photo: "chelsea.webp",
      name: "Chelsea",
      price: 99.99,
      active: false,
      quantity: 1,
      isInBag: false,
    },
    {
      id: 4,
      photo: "barcelona.png",
      name: "Barcelona",
      price: 109.99,
      active: false,
      quantity: 1,
      isInBag: false,
    },
    {
      id: 5,
      photo: "benfica.png",
      name: "Benfica",
      price: 89.49,
      active: false,
      quantity: 1,
      isInBag: false,
    },
    {
      id: 6,
      photo: "manchester.webp",
      name: "Manchester City",
      price: 129.79,
      active: false,
      quantity: 1,
      isInBag: false,
    },
    {
      id: 7,
      photo: "bayern.webp",
      name: "Bayern",
      price: 119.99,
      active: false,
      quantity: 1,
      isInBag: false,
    },
    {
      id: 8,
      photo: "psg.png",
      name: "PSG",
      price: 94.99,
      active: false,
      quantity: 1,
      isInBag: false,
    },
    {
      id: 9,
      photo: "ajax.webp",
      name: "Ajax",
      price: 89.99,
      active: false,
      quantity: 1,
      isInBag: false,
    },
  ];

  // o arquivo jsx mistura html com javascript e usamos {} dentro do html para isso
  const shopName = "Jersey Shop";

  return (
    // sempre que temos multiplas linhas sempre colocamos parenteses e tudo que estiver dentro do return precisa está dentro de um unico elemento raiz que pode ser um fragment: <></>
    <>
      {/* o html é digitado dentro do return */}
      <section className="items">
        {" "}
        {/* className tomou o lugar de class */}
        <h4>{shopName}</h4>{" "}
        {/* adicioando um javascript dentro do html - jsx */}
        {items.map((item) => (
          <div key={item.id} className={`product ${item.isInBag ?  'selected' : ''}`} > {/* aqui o operador && não é muito bom por que ele inclue a classe false no outros itens */}
            {/* se o isInBag for true ele coloca a classe selected */}
            {/* o title poderia ser o id também se ele for único */}
            {/* cada id é passado para key por que é assim que ele identifica cada elemento */}
            <div className="photo">
              <img src={"./img/" + item.photo} />{" "}
              {/* tags sem fechamento precisam fechar na tag de abetura */}
            </div>
            <div className="description">
              <span className="name">{item.name}</span>
              <span className="price">{item.price}</span>
              {
                item.isInBag && // o operador AND funciona de forma simples, a operação é lida do final para o início, e retorna o último valor falso que encontrar
                <div className="quantity-area"> {/* os itens precisam sempre estar dentro de uma div no render condicional */}
                  <button>-</button>
                  <span className="quantity">{item.quantity}</span>
                  <button>+</button>
                </div>
              }
            </div>
          </div>
        ))}
      </section>

      <section className="summary">
        <strong>Order Details</strong>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1x Real Madrid</td>
              <td>$ 119.99</td>
            </tr>

            <tr>
              <th>Total</th>
              <th>$ 119.99</th>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
}

export default App; // exportando componente
