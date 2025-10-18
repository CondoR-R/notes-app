import type {IdT, NewNoteT, NoteT} from "@/types/Note.type.ts";
import type {SearchQueryT} from "@/types";

type AddNoteActionT = { type: 'ADD_NOTE', payload: NewNoteT };
type RemoveNoteActionT = { type: 'REMOVE_NOTE', payload: IdT };
type LoadNotesActionT = { type: 'LOAD_NOTES', payload: NoteT[] };
type ChangeSearchQueryActionT = {
  type: 'CHANGE_SEARCH_QUERY',
  payload: SearchQueryT
};

export type ActionT =
  AddNoteActionT
  | RemoveNoteActionT
  | LoadNotesActionT
  | ChangeSearchQueryActionT;