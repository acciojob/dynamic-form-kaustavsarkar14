import { useState } from 'react';
import React from "react";
import './../styles/App.css';

const App = () => {
  const [fields, setFields] = useState([]);
  const [idCounter, setIdCounter] = useState(0);

  const addField = () => {
    setFields([...fields, { id: idCounter, value: '' }]);
    setIdCounter(idCounter + 1); // Increment the counter for the next ID
  };

  const deleteField = (id) => {
    setFields(fields.filter(field => field.id !== id));
  };

  return (
    <div>
      {fields.length === 0 ? (
        <p>No fields in the form</p>
      ) : (
        fields.map(field => (
          <div key={field.id}>
            <input value={field.value} onChange={(e) => {
              const newFields = fields.map(f => {
                if (f.id === field.id) {
                  return { ...f, value: e.target.value };
                }
                return f;
              });
              setFields(newFields);
            }} />
            <button className="delete" onClick={() => deleteField(field.id)}>Delete</button>
          </div>
        ))
      )}
      <button className="add" onClick={addField}>Add Field</button>
    </div>
  );
};

export default App;
