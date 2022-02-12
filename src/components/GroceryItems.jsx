import './Grocery.css';

export const GroceryItems = ({ title, id, deleteItem }) => {
  return (
    <div className="itemDiv">
      
          <h3>~ {title} ~</h3> 
       
        
          <button onClick={() => {
              deleteItem(id);
          }}> Delete</button> 
          
    </div>
  );
};
