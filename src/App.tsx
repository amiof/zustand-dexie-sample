// import { useLiveQuery } from 'dexie-react-hooks'
// import './App.css'
import useTodoStore from './zustand/store'
import { Ttodo } from './zustand/type'

function App() {
  const {todoes}=useTodoStore()
  const {fetchData}=useTodoStore().actions
  // const todoesApp= useLiveQuery(()=>todoesApp,[]) 


  return (
    <>
        <button onClick={fetchData} >fetchData</button>
      <ul>
        {todoes.map((todo:Ttodo)=><li key={todo.id}>{todo.id}_{todo.title}</li>)}
      </ul>
    </>
  )
}

export default App
