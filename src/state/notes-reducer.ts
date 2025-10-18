import type {ActionT, NoteT, StateT} from "@/types";

export const initialState: StateT = {
  notes: [],
}

export const reducer = (state: StateT, action: ActionT) => {
  switch (action.type) {
    case 'ADD_NOTE': {
      const newNote: NoteT = {
        title: action.payload.title,
        content: action.payload.content,
        date: new Date(),
        id: Date.now(),
      }
      return {
        ...state,
        notes: [...state.notes, newNote],
      }
    }
    case 'REMOVE_NOTE': {
      return {
        ...state,
        notes: [...state.notes.filter(({id}) => id !== action.payload)]
      }
    }
    default: {
      throw new Error('Неизвестный type')
    }
  }
}