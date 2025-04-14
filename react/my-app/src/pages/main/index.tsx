import { useCallback, useState } from "react";
import { Todo } from "../../shared/model/todo.type";
import TodoWidget from "../../widgets/todo-widget/todo-widget";
import SliderWidget from "../../widgets/slider-widget/slider-widget";

export const MainPage = () => {
  const [todo, setTodo] = useState<Todo[]>([
    { id: 1, item: "Todo 1", status: true },
    { id: 2, item: "Todo 2", status: true },
  ]);
  const [todoValue, setTodoValue] = useState<string>();
  const [slide, setSlide] = useState(0);
  const handleStatus = useCallback(
    (id: number) => {
      if (!id) {
        return;
      }
      const targetItem = todo?.find((todo) => todo.id);

      if (targetItem) {
        setTodo((prev) =>
          prev.map((todo) => {
            return todo.id === id ? { ...todo, status: !todo.status } : todo;
          })
        );
      }
    },
    [todo]
  );
  const createTodo = useCallback(() => {
    if (!todoValue) {
      return;
    }
    const maxId =
      todo.length === 0
        ? 1
        : todo?.reduce((max, cur) => {
            return max.id > cur.id ? max : cur;
          }).id;
    const newTodo: Todo = { id: maxId + 1, item: todoValue, status: false };
    setTodo((prev) => [...prev, newTodo]);
    setTodoValue("");
  }, [todoValue, todo]);
  const handleDelete = useCallback(
    (id: number) => {
      const updatedTodos = todo.filter((el) => el.id != id);
      setTodo(updatedTodos);
    },
    [todo]
  );
  return (
    <div>
      <h1>ToDo List</h1>
      <TodoWidget
        todo={todo}
        handleStatus={handleStatus}
        handleDelete={handleDelete}
      />
      <SliderWidget slide={slide} />
      <input
        type="text"
        onChange={(e) => setTodoValue(`${e.target.value}`)}
      ></input>
      <button onClick={createTodo}>Add new todo</button>
      <div className="flex items-center justify-center gap-[10px]">
        <button onClick={() => setSlide(slide - 1)}>Previous slide</button>
        <button onClick={() => setSlide(slide + 1)}>Next slide</button>
      </div>
    </div>
  );
};
/*  */
