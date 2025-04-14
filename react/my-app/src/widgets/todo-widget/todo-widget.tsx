import { memo } from "react";
import { Todo } from "../../shared/model/todo.type";

type Props = {
  todo: Todo[];
  handleStatus: (id: number) => void;
  handleDelete: (id: number) => void;
};
const TodoWidget = (props: Props) => {
  console.log("Todo widget");
  const { todo, handleStatus, handleDelete } = props;
  return (
    <ul>
      {todo?.map((el, idx) => {
        return (
          <div
            key={idx}
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <li>{el.item}</li>
            <button onClick={() => handleStatus(el.id)}>
              {!el.status ? "Done" : "Return back"}
            </button>

            <button onClick={() => handleDelete(el.id)}>delete</button>
          </div>
        );
      })}
    </ul>
  );
};
export default memo(TodoWidget);
