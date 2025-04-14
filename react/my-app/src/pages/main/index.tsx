import { useCallback, useMemo, useState } from "react";
import { Todo } from "../../shared/model/todo.type";
import TodoWidget from "../../widgets/todo-widget/todo-widget";
import SliderWidget from "../../widgets/slider-widget/slider-widget";

export const MainPage = () => {
  const [todo, setTodo] = useState<Todo[]>([
    { id: 1, item: "Todo 1", status: true, name: "Alex" },
    { id: 2, item: "Todo 2", status: true, name: "Alex" },
  ]);
  const [todoValue, setTodoValue] = useState<string>();
  const [todoName, setTodoName] = useState<string>();
  const [name, setName] = useState<string>("all");
  const [slide, setSlide] = useState(0);
  const filteredNameList = useMemo(() => {
    const names = todo.map((el) => el.name);
    return [...new Set(names)];
  }, [todo]);
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
    if (!todoValue || !todoName) {
      return;
    }

    const maxId =
      todo.length === 0
        ? 1
        : todo?.reduce((max, cur) => {
            return max.id > cur.id ? max : cur;
          }).id;
    const newTodo: Todo = {
      name: todoName,
      id: maxId + 1,
      item: todoValue,
      status: false,
    };
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

  const filteredTodos = useMemo(() => {
    const arr = name === "all" ? todo : todo.filter((el) => el.name === name);
    return arr;
  }, [name, todo]);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        padding: "2.5% 1%",
        width: "100%",
        border: "solid 0.5px black",
      }}
    >
      <h1 className="text-red-500">ToDo List</h1>
      <TodoWidget
        todo={filteredTodos}
        handleStatus={handleStatus}
        handleDelete={handleDelete}
        createTodo={createTodo}
        setTodoValue={setTodoValue}
        setTodoName={setTodoName}
        setName={setName}
        nameList={filteredNameList}
      />
      <SliderWidget slide={slide} setSlide={setSlide} />
    </div>
  );
};
