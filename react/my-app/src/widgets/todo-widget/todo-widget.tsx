import { memo } from "react";
import { Todo } from "../../shared/model/todo.type";

type Props = {
  todo: Todo[];
  handleStatus: (id: number) => void;
  handleDelete: (id: number) => void;
  createTodo: () => void;
  setTodoValue: React.Dispatch<React.SetStateAction<string | undefined>>;
  setTodoName: React.Dispatch<React.SetStateAction<string | undefined>>;
  setName: React.Dispatch<React.SetStateAction<string>>;
  nameList: string[];
};
const TodoWidget = (props: Props) => {
  console.log("Todo widget");
  const {
    todo,
    handleStatus,
    handleDelete,
    createTodo,
    setTodoValue,
    setTodoName,
    nameList,
    setName,
  } = props;
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "10px",
        backgroundColor: "gray",
      }}
    >
      <select onChange={(e) => setName(e.target.value)}>
        <option value={""} hidden>
          Select name
        </option>
        <option value={"all"}>All</option>
        {nameList.map((name) => (
          <option value={name}>{name}</option>
        ))}
      </select>{" "}
      <ul
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          width: "50%",
          color: "white",

          padding: "5% 10%",
          gap: "10px",
        }}
      >
        {todo?.map((el, idx) => {
          return (
            <div
              key={idx}
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <li>
                {el.item}- {el.name}
              </li>
              <button onClick={() => handleStatus(el.id)}>
                {!el.status ? "Done" : "Return back"}
              </button>

              <button onClick={() => handleDelete(el.id)}>delete</button>
            </div>
          );
        })}
      </ul>
      <input
        type="text"
        onChange={(e) => setTodoValue(`${e.target.value}`)}
        placeholder="todo"
      />
      <input
        type="text"
        onChange={(e) => setTodoName(`${e.target.value}`)}
        placeholder="name"
      />
      <button onClick={createTodo}>Add new todo</button>
    </div>
  );
};
export default memo(TodoWidget);
