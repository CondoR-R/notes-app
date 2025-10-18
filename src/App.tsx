import {NoteForm, NoteList} from "@/components";
import {
  DispatchContext,
  initialState,
  reducer,
  StateContext
} from "@/state/notes-reducer.ts";
import {useEffect, useReducer} from "react";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(state.notes));
  }, [state.notes]);

  useEffect(() => {
    const savedNotes = localStorage.getItem('notes');
    if (!savedNotes) return;
    dispatch({type: 'LOAD_NOTES', payload: JSON.parse(savedNotes)})
  }, [])

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
