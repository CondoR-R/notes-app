import type {NoteT} from "@/types/Note.type.ts";

export type SearchQueryT = string

export type StateT = { notes: NoteT[] | [], searchQuery: SearchQueryT };