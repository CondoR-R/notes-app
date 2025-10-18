import type {IdT, NewNoteT, NoteT} from "@/types/Note.type.ts";

type AddNoteActionT = { type: 'ADD_NOTE', payload: NewNoteT };
type RemoveNoteActionT = { type: 'REMOVE_NOTE', payload: IdT };
type LoadNotesActionT = { type: 'LOAD_NOTES', payload: NoteT[] };

export type ActionT = AddNoteActionT | RemoveNoteActionT | LoadNotesActionT;