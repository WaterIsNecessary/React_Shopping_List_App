

function ShoppingItem({item, onToggle, onQuantityChange}){

    return (
        
        <li>
            <label>
                <input type="checkbox" checked={item.purchased} onChange={ () => onToggle(item.id)} />
                {item.name}
            </label>
            <input 
                type="number" 
                min="1" 
                value={item.quantity} 
                onChange={e => {
                    const newQuantity = e.target.valueAsNumber
                    newQuantity >= 1 ? onQuantityChange(item.id, newQuantity) : null
                }}
            />
        </li>        
        
    )

}

export default ShoppingItem