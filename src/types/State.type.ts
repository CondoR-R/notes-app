import type {NoteT} from "@/types/Note.type.ts";

export type SearchQueryT = string;
export type SortOrderT = 'desc' | 'asc';

export type StateT = {
  notes: NoteT[] | [],
  searchQuery: SearchQueryT,
  sortOrder: SortOrderT
};