import './TableBook.css'
import React, { useState } from "react";

function TableBook(props) {
  const { books, onDelete, onUpdate } = props;
  return (
    <div>
      <h1>AddBooks</h1>
      <table>
        <tbody >
          <tr>
            <td><h1 className='title'>Title</h1></td>
            <td><h1 className='des'>Description</h1></td>
           <td><h1 className='des'>Details</h1></td>
           <td><h1 className='des'>Actions</h1></td>
          </tr>
          {books.map((book) => {
            return (
              <tr key={book._id}>
                <td>{book.title}</td>
                 <td>{book.description}</td> 
                <td>
                  <DescriptionForm
                    book={book}
                    onUpdate={onUpdate}
                  ></DescriptionForm>
                </td>
                <td>
                  <button className='button'onClick={() => onDelete(book._id)}>Delete</button>
                </td>

                
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function DescriptionForm(props) {
  const { book, onUpdate } = props;

  const [description, setDescription] = useState(book.description);

  const handleChange = (event) => {
    setDescription(event.target.value);
  };
  return (
    <div>
      <td className='inputs'>
        <input
          type="text"
          value={description}
          onChange={(e) => handleChange(e)}
        ></input>
      </td>
      <td>
        <button className='button'
          onClick={() => onUpdate({ _id: book._id, description: description })}
        >
          Update
        </button>
      </td>
    </div>
  );
}

export default TableBook;
