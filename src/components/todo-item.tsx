import classnames from "classnames";
import React, { useState } from "react";
import { Todo, TodoUpdate } from "../todo";
import TodoTextInput from "./todo-text-input";

export function TodoItem({
  todo,
  onUpdate,
  onDelete,
}: {
  todo: Todo;
  onUpdate: (update: TodoUpdate) => void;
  onDelete: () => void;
}) {
  const { id } = todo;
  const [editing, setEditing] = useState(false);

  const handleDoubleClick = () => {
    setEditing(true);
  };

  const handleSave = (text: string) => {
    if (text.length === 0) {
      onDelete();
    } else {
      onUpdate({ id, text });
    }
    setEditing(false);
  };

  const handleToggleComplete = () =>
    onUpdate({ id, completed: !todo.completed });

  let element;
  if (editing) {
    element = (
      <TodoTextInput
        initial={todo.text}
        onSubmit={handleSave}
        onBlur={handleSave}
      />
    );
  } else {
    element = (
      <div
        className="view"
        style={{
          backgroundColor: todo.urgent ? "red" : "",
        }}
      >
        <input
          className="toggle"
          type="checkbox"
          checked={todo.completed}
          onChange={handleToggleComplete}
        />
        <label onDoubleClick={handleDoubleClick}>{todo.text}</label>
        <button
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 50,
            width: 40,
            height: 40,
            fontSize: 30,
            margin: "auto 0",
          }}
          onClick={() => onUpdate({ id, urgent: !todo.urgent })}
        >
          ❕
        </button>
        <button className="destroy" onClick={() => onDelete()} />
        <button className="destroy" onClick={() => onDelete()} />
      </div>
    );
  }

  return (
    <li
      className={classnames({
        completed: todo.completed,
        editing,
      })}
    >
      {element}
    </li>
  );
}
