
import { GroceryInput } from "./GroceryInput";
import { GroceryItems } from "./GroceryItems";
import { useState } from "react";
import { v4 } from "uuid";

export const Grocery = () => {
  let [groceries, setGrocery] = useState([]);

  const handleClick = (text) => {
    const payload = {
      title: text,
      id: v4(),
      status: false,
    };
    setGrocery([...groceries, payload]);
  };

  const deleteItem = (id) => {   
  
    groceries = groceries.filter((el) => {
      return el.id != id;
    });
    
    setGrocery(groceries)
    
    };

  return (
    <div>
      <GroceryInput handleClick={handleClick} />

      {groceries.map((e) => {
        return (
          <GroceryItems
            key={e.id}
            title={e.title}
            id={e.id}
            deleteItem={deleteItem}
          />
        );
      })}
    </div>
  );
};
