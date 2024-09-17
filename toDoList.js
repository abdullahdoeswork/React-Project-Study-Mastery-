import { useState } from "react";



// Form component that tracks what the user writes
const MyForm = () => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    // Update the state with the current value of the input field
    setValue(event.target.value);
    console.log('Input value changed:', event.target.value);
  };


    const handleSubmit = (event) => {
        event.preventDefault();
        setValue(event.target.value);
        console.log('Input Submit changed' , event.target.value)
    };

    

// We want UesrText to use value and handleChange so it needs to be inside the MyForm const.

  return (
    <div>
      <ToDoTitle />
      <UserText value={value} onChange={handleChange} onSubmit={handleSubmit} />
      <ToDoContainer UserText={value} />
    </div>
  );
};

// Component for displaying the title
const ToDoTitle = () => {
  return (
    <>
      <h2>To Do List</h2>
    </>
  );
};

// Component for displaying the text entered by the user
const ToDoContainer = ({ UserText }) => {
    return (
        <>
          {UserText}
        </>
      );
};

// Component for the input field
const UserText = ({ value, onChange, onSubmit }) => {
    return (
        <form onSubmit={onSubmit}>
      <input
        type="text"
        onChange={onChange}
        value={value}
      />
      </form>
    );
  };



export default MyForm;
