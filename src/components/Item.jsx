function Item({item, selectProduct}) { // passando uma prop para o componente
    return (
        <>
            <div onClick={() => selectProduct(item.id)} className={`product ${item.isInBag ? 'selected' : ''}`} > {/* aqui o operador && não é muito bom por que ele inclue a classe false no outros itens */}
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
        </>
    );
}

export default Item;