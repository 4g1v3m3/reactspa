import { useState } from "react";

function Input() {
  const [value, setValue] = useState(""); 

  const handleChange = (e) => { 
    e.preventDefault();
    setValue(e.target.value)
  } 

  const [name, setName] = useState("")


  const handleSubmit = (e) => {
    e.preventDefault();
    setName("")
    alert('Form submitted!')
    console.log('123')
  }
  return ( 
    <>
      <form>
        <input
          value={value}
          placeholder="Casino"
          onChange={handleChange}
          type="text" />
      </form><p id="grad1">{value}</p>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <div className="Field">
            <label htmlFor="name">Name:</label>
            <input 
              id="name"
              type="text"  
              placeholder="Name" 
              name="name" value={name} 
              onChange={e => setName(e.target.value)}
             />
          </div>
          <button disabled={!name} type="submit">Submit</button>
        </fieldset>
      </form>
    </>
  ); 
   }; 

export default Input