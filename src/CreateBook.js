import './CreateBook.css';
import React, { useState } from "react";

function CreateBook(props) {
  const { onCreate } = props;

  const [book, setBook] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onCreate(book);
  };
  return (
   <div className='title'>
    <form onSubmit={onSubmit}>
       
      <label>
      <p className="title" style={{color:"black"}}>Title
        <input 
          name="title"
          type="text"
          value={book.title}
          onChange={(e) => handleChange(e)}
        ></input>
        </p>
      </label>
    
      <label>
        <p  style={{color:"black"}}>Description
        <input
          name="description"
          type="text"
          value={book.description}
          onChange={(e) => handleChange(e)}
        ></input>
        </p>
      </label>
      <input className='input' type="submit" value="Submit" />
    </form>
    </div>
  );
}

export default CreateBook;