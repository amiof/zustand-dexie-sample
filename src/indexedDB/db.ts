import Dexie, { Table } from "dexie"
import { Ttodo } from "../zustand/type"


// const db=new Dexie ("myDataBase")
// db.version(1).stores({todoes:"userid,id,title,completed"})

export class myDataBase extends Dexie {
  todoesApp!: Table<Ttodo[]>
  constructor() {
    super("todoesDB")
    this.version(1).stores({ todoesApp: "userid,id,title,completed" })
  }

}
export const db= new myDataBase()
