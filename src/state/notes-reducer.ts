import type {ActionT, NoteT, StateT} from "@/types";
import {createContext, type Dispatch} from "react";

export const initialState: StateT = {
  notes: [],
  searchQuery: '',
}

export const reducer = (state: StateT, action: ActionT) => {
  switch (action.type) {
    case 'ADD_NOTE': {
      const newNote: NoteT = {
        title: action.payload.title,
        content: action.payload.content,
        date: (new Date()).toString(),
        id: Date.now(),
      }
      return {
        ...state,
        notes: [newNote, ...state.notes],
      }
    }
    case 'REMOVE_NOTE': {
      return {
        ...state,
        notes: [...state.notes.filter(({id}) => id !== action.payload)]
      }
    }
    case 'LOAD_NOTES': {
      return {
        ...state,
        notes: action.payload,
      }
    }
    case 'CHANGE_SEARCH_QUERY': {
      return {
        ...state,
        searchQuery: action.payload,
      }
    }
    default: {
      throw new Error('Неизвестный type')
    }
  }
}

export const StateContext = createContext<StateT>(initialState);
export const DispatchContext =
  createContext<Dispatch<ActionT> | null>(null);