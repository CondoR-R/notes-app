import {NoteForm, NoteList} from "@/components";
import {
  DispatchContext,
  initialState,
  reducer,
  StateContext
} from "@/state/notes-reducer.ts";
import {useReducer} from "react";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <h1>Notes App</h1>
        <NoteForm />
        <NoteList />
      </DispatchContext.Provider>
    </StateContext.Provider>
  )
}

export default App
