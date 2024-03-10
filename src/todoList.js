import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import TodoListItem from "./todoListItem";
import { useSelector, useDispatch } from "react-redux";
import { addItem, deleteItem, updateItem } from "./store/todo/todoSlice";

export const ToDoData = React.createContext();

const TodoList = () => {
  const [itemName, setItemName] = useState("");
  const [dataId, setDataId] = useState(null);

  const itemData = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const handleInput = (e) => {
    setItemName(e.target.value);
  };

  const handleAddBtn = () => {
    if (itemName == "") {
      alert("write Something");
      return;
    }
    if (dataId == null) {
      let isSame = true;
      while (isSame === true) {
        const randomId = Math.floor(Math.random() * 100);
        if (itemData.find((item) => item.id == randomId)) {
          isSame = true;
        } else {
          const data = [...itemData, { name: itemName, id: randomId }];
          dispatch(addItem(data));
          isSame = false;
          setItemName("");
          return;
        }
      }
    } else {
      const modifyData = itemData.map((item) => {
        if (item.id == dataId) {
          return { ...item, name: itemName };
        } else {
          return item;
        }
      });
      dispatch(updateItem(modifyData));
      setItemName("");
      setDataId(null);
    }
  };

  const handleDeleteBtn = (id) => {
    const filterData = itemData.filter((item) => item.id != id);
    dispatch(deleteItem(filterData));
  };

  const handleEditBtn = (name, id) => {
    setItemName(name);
    setDataId(id);
  };

  return (
    <div>
      <Box
        sx={{
          width: 500,
          maxWidth: "100%",
          margin: "auto",
          mt: 4,
        }}
      >
        <TextField
          fullWidth
          label="Items"
          id="fullWidth"
          value={itemName}
          onChange={handleInput}
        />
        <Button variant="contained" size="small" onClick={handleAddBtn}>
          {dataId == null ? "Add Item" : "Update"}
        </Button>
      </Box>
      <ToDoData.Provider value={itemData}>
        <TodoListItem
          handleDeleteBtn={handleDeleteBtn}
          handleEditBtn={handleEditBtn}
        />
      </ToDoData.Provider>
    </div>
  );
};

export default TodoList;
