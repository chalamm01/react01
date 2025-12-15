import { useState } from "react";

export default function App() {
  const [newItem, setNewItem] = useState("");

  return (
    <>
      <form className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New item</label>
          <br />
          <input
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            type="text"
            id="item"
          />
        </div>
        <div>
          <button className="btn btn-primary">Add</button>
        </div>
      </form>
      <h1 className="header">Todo List</h1>
      <ul>
        <li>
          <input
            className="form-check-input me-1"
            type="checkbox"
            value=""
            id="firstCheckbox"
          />
          <label className="form-check-label" htmlFor="firstCheckbox">
            Task1
          </label>
          <button className="btn btn-outline-danger">Delete</button>
        </li>
      </ul>
    </>
  );
}
