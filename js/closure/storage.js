/* Условие:
Напиши функцию createStorage, которая создаёт хранилище.
Она должна возвращать объект с двумя методами:

set(value) — сохраняет значение

get() — возвращает сохранённое значение

Пример использования:

js
Копировать
Редактировать
const storage = createStorage();
storage.set("Secret");
console.log(storage.get()); // "Secret" */

const createStorage = () => {
  const storage = [];
  return {
    set: (value) => {
      storage.push(value);
    },
    get: () => {
      return storage;
    },
  };
};
const storage = createStorage();

storage.set("Storage");
storage.set("Storage2");
console.log(storage.get());
