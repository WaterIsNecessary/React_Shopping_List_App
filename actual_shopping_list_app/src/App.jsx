import { useState } from 'react'
import AddForm from './components/AddForm'
import ShoppingList from './components/ShoppingList'

function App() {
  const startingList = [
    {
      id: crypto.randomUUID(),
      name: "Banana",
      quantity: 2,
      purchased: false
    },
    {
      id: crypto.randomUUID(),
      name: "Apple",
      quantity: 3,
      purchased: true
    }
  ]

  const [shoppingListItems, setShoppingListItems] = useState(startingList)

  const [errorMessage, setErrorMessage] = useState("")

  function handleAddItem(itemName, itemQuantity) {

    if (!itemName && !itemQuantity) {

      setErrorMessage("Please enter a name for your item and a corresponding quantity.")
      return

    } else if (!itemName) {

      setErrorMessage("Please enter a name for your item.")
      return

    } else if (!itemQuantity) {

      setErrorMessage("Please enter a quantity for your item.")
      return

    }

    setErrorMessage("")

    const newShoppingListItem = {
      id: crypto.randomUUID(),
      name: itemName,
      quantity: itemQuantity,
      purchased: false
    }

    setShoppingListItems(prev => [...prev, newShoppingListItem])


  }

  function handleToggle(shoppingListItemId) {
    setShoppingListItems(prev => 
      prev.map(item =>
        item.id === shoppingListItemId
          ? { ...item, purchased: !item.purchased }
          : item
      )
    )
  }

  function handleQuantityChange(shoppingListItemId, newQuantity) {
    setShoppingListItems(prev => 
      prev.map(item => 
        item.id === shoppingListItemId
          ? {...item, quantity: newQuantity}
          : item
      )
    )
  }



  return (
    <>
      <header>
        <h1><a href="#">The Shopping List App</a></h1>
      </header>
      <main>
        <AddForm 
          onAddItem={handleAddItem}
          errorMessage={errorMessage}
        />
        <ShoppingList 
          shoppingListItems={shoppingListItems}
          onToggle={handleToggle}
          onQuantityChange={handleQuantityChange}
        />
      </main>
      <footer></footer>
    </>
  )
}

export default App
