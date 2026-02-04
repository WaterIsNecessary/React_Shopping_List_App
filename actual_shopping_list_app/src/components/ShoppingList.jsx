import ShoppingItem from "./ShoppingItem";

function ShoppingList({shoppingListItems, onToggle, onQuantityChange}) {


    return (
        <section>
            <h2>Shopping List Items</h2>
            <ul>
                {shoppingListItems.map( item => (
                    <ShoppingItem key={item.id} item={item} onToggle={onToggle} onQuantityChange={onQuantityChange} />
                ))}
            </ul>
        </section>
    )

}

export default ShoppingList