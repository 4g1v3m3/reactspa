const DessertsList = (props) => {
    const lowCaloriesDesserts = props.data
      .filter((dessert) => {
        return dessert.calories < 900;
      })
      .sort((a, b) => { 
        return b.item - a.item; 
      })
      .map((dessert) => { 
      return ( 
          <li>
            {dessert.name} - {dessert.calories} cal - {dessert.createdAt} -{dessert.item}
          </li> 
        ); 
      }); 
    return <ul>{lowCaloriesDesserts}</ul>; 
   
   }
   export default DessertsList; 
   
   