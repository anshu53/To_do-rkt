import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addtodo,
  removetodo,
  resettodo,
  checkboxtodo,
  editing,
  submitediting,
} from "../Todoslice";

const Addtodo = () => {
  const [input, setInput] = useState("");
  const [tooglesubmit, setTooglesubmit] = useState(true);

  const dispatch = useDispatch();
  const todoslist = useSelector((state) => state.todo.todos);
  const editingvalue = useSelector((state) => state.todo.isediting);

  const addtodohandler = () => {
    if (input === "") {
      return;
    } else if (editingvalue !== "" && !tooglesubmit) {
      dispatch(submitediting(input));
      setInput("");
      setTooglesubmit(true);
    } else {
      dispatch(addtodo(input));
      setInput("");
    }
  };

  const removehandler = (item) => {
    dispatch(removetodo(item.id));
    setInput("");
  };
  const resethandler = () => {
    dispatch(resettodo());
    setInput("");
  };

  const handleedit = (elem) => {
    dispatch(editing(elem.id));
    const editingtext = todoslist.find((element) => element.id === elem.id);
    setInput(editingtext.text);
    setTooglesubmit(false);
  };
  const handleCancelEdit = () => {
    setInput("");
    setTooglesubmit(true);
  };

  return (
    <>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        {tooglesubmit ? (
          <button onClick={() => addtodohandler()}>Add todo</button>
        ) : (
          <>
            <button onClick={() => addtodohandler()}>Update todo</button>
            <button onClick={handleCancelEdit}>Cancel</button>
          </>
        )}

        <button onClick={resethandler}>Reset</button>
      </div>
      <div>
        {todoslist.map((data) => {
          return (
            !data.ischecked && (
              <p key={data.id}>
                <input
                  type="checkbox"
                  checked={data.ischecked}
                  onChange={() => dispatch(checkboxtodo(data.id))}
                />

                {data.text}
                <button onClick={() => removehandler(data)}>delet</button>
                <button
                  disabled={data.ischecked}
                  onClick={() => handleedit(data)}
                >
                  Edit
                </button>
              </p>
            )
          );
        })}
        {todoslist.map((data) => {
          return (
            data.ischecked && (
              <p className={data.ischecked ? "addstyle" : ""} key={data.id}>
                <input
                  type="checkbox"
                  checked={data.ischecked}
                  onChange={() => dispatch(checkboxtodo(data.id))}
                />

                {data.text}
                <button onClick={() => removehandler(data)}>delet</button>
                <button
                  disabled={data.ischecked}
                  onClick={() => handleedit(data)}
                >
                  Edit
                </button>
              </p>
            )
          );
        })}
      </div>
    </>
  );
};

export default Addtodo;
