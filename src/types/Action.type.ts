import type {IdT, NewNoteT, NoteT} from "@/types/Note.type.ts";
import type {SearchQueryT} from "@/types";
import type {SortOrderT} from "@/types/State.type.ts";

type AddNoteActionT = { type: 'ADD_NOTE', payload: NewNoteT };
type RemoveNoteActionT = { type: 'REMOVE_NOTE', payload: IdT };
type LoadNotesActionT = { type: 'LOAD_NOTES', payload: NoteT[] };
type ChangeSearchQueryActionT = {
  type: 'CHANGE_SEARCH_QUERY',
  payload: SearchQueryT
};
type ChangeSortOrderActionT = {
  type: 'CHANGE_SORT_ORDER',
  payload: SortOrderT
}

export type ActionT =
  AddNoteActionT
  | RemoveNoteActionT
  | LoadNotesActionT
  | ChangeSearchQueryActionT
  | ChangeSortOrderActionT;