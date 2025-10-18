import type {IdT, NewNoteT} from "@/types/Note.type.ts";

type AddNoteActionT = { type: 'ADD_NOTE', payload: NewNoteT };
type RemoveNoteActionT = { type: 'REMOVE_NOTE', payload: IdT };

export type ActionT = AddNoteActionT | RemoveNoteActionT;