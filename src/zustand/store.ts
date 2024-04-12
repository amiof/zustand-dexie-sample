import { create } from "zustand";
import { Ttodo, TtodoStore } from "./type";
// import zustyMiddlewarets from "zustymiddlewarets";
import { devtools } from "zustand/middleware";
// import {zukeeper} from "zukeeper"

const useTodoStore = create<TtodoStore>(devtools((set) => ({
  todoes: [],
  actions: {
    addTodo: (todo: Ttodo) => set((state) => ({ todoes: [...state.todoes, todo] }), false, "addTodo"),
    removeTodo: (todoId) => set((state) => ({ todoes: state.todoes.filter(todo => { todo.id !== todoId }) }), false, 'removeTodo'),
    fetchData: async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos")
        const data:Ttodo[] = await response.json()
        console.log(data)
        set(() => ({ todoes: data }), false, "fetchData")

      } catch (error) {
        console.log(error)

      }

    }
  }

})))

// declare global {
//   interface Window {
//     store: typeof useTodoStore;
//   }
// }
//
// window.store = useTodoStore;
export default useTodoStore
