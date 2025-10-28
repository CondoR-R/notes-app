import {NoteForm, NoteList} from "@/components";
import {
  DispatchContext,
  initialState,
  reducer,
  StateContext
} from "@/state/notes-reducer.ts";
import {useEffect, useReducer, useRef} from "react";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const getNotesRef = useRef<boolean>(false);

  useEffect(() => {
    if (!getNotesRef.current) {
      const savedNotes = localStorage.getItem('notes');
      if (!savedNotes) return;
      dispatch({type: 'LOAD_NOTES', payload: JSON.parse(savedNotes)});
      getNotesRef.current = true;
    } else {
      localStorage.setItem('notes', JSON.stringify(state.notes));
    }
  }, [state.notes]);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <h1 className={'h1'}>Notes App</h1>
        <NoteForm />
        <NoteList />
      </DispatchContext.Provider>
    </StateContext.Provider>
  )
}

export default App
