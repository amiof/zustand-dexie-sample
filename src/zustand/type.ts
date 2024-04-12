type Ttodo={
  userid:number;
  id:number;
  title:string;
  complated:boolean;
}
type TtodoStore={
  todoes:Ttodo[];
  actions:{
    removeTodo:(todoId:number)=>void,
    addTodo:(todo:Ttodo)=>void
    fetchData:()=>void
  }
}
export type {TtodoStore,Ttodo }
