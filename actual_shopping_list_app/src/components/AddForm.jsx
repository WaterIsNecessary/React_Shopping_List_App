import { useState } from "react";

function AddForm({onAddItem, errorMessage}) {

    const [itemName, setItemName] = useState("")
    const [itemQuantity, setItemQuantity] = useState("")

    function handleSubmit(e) {
        e.preventDefault()

        onAddItem(itemName, itemQuantity)

        setItemName("")
        setItemQuantity("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Add Shopping List Item</legend>

                <label>
                    Item name:
                    <input type="text" value={itemName} onChange={(e) => setItemName(e.target.value)}/>                    
                </label>

                <label>
                    Quantity:
                    <input type="number" value={itemQuantity} onChange={(e) => setItemQuantity(e.target.valueAsNumber)} />
                </label>

                <button type="submit">Add Item to Shopping List</button>

                {errorMessage && <p>{errorMessage}</p>}
            </fieldset>
        </form>
    )

}

export default AddForm