import "./App.css"; // importando css do arquivo
import OrderDetails from "./components/OrderDetails"; // importanto um novo componente
import Item from "./components/Item";

// os componentes são basicamente funções - devemos dividir a aplicação em componentes desde o ínicio e quanto menores eles forem, melhor. 
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

  const itemsInBag = items.filter(item => item.isInBag); // criando uma array nova que filtra todos os items que tem o isInBag igual a true

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
        {items.map((item) => ( // essa propriedade possui o mesmo nome do parametro da função map
          <Item
            selectProduct ={(id) => alert(`${id}`)}
            item={item}
            key={item.id}
          />
        ))}
      </section>
      {itemsInBag.length > 0 && <OrderDetails />} {/* se o tamanho de itemsInBag for maior que 0 então ele exibe o OrderDetails se não, ele não exibe */}
    </>
  );
}

export default App; // exportando componente
