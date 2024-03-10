import React, { useContext } from "react";
import Button from "@mui/material/Button";
import { ToDoData } from "./todoList";

const TodoListItem = ({ handleDeleteBtn, handleEditBtn }) => {
  const itemData = useContext(ToDoData);
  return (
    <div>
      {itemData.map((item) => {
        return (
          <ul key={item.id}>
            <li>
              {item.name}
              <Button
                sx={{
                  ml: 4,
                }}
                variant="contained"
                size="small"
                onClick={() => handleDeleteBtn(item.id)}
              >
                Delete Item
              </Button>
              <Button
                sx={{
                  ml: 10,
                }}
                variant="contained"
                size="small"
                onClick={() => handleEditBtn(item.name, item.id)}
              >
                Edit Item
              </Button>
            </li>
          </ul>
        );
      })}
    </div>
  );
};
export default TodoListItem;
