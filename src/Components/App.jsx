import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [list, setList] = useState([]);

  function onAddHandler(newNote) {
    setList((prev) => {
      return [...prev, newNote];
    });
  }

  function onDeleteHandler(id) {
    setList((prev) => {
      return prev.filter((note, index) => index !== id);
    });
  }
  console.log(list);

  return (
    <div>
      <Header />
      <CreateArea onAdd={onAddHandler} />
      {list.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onDelete={onDeleteHandler}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
