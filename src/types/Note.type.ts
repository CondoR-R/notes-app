export type IdT = number;

export type NewNoteT = {
  title: string;
  content: string;
}

export type NoteT = {
  id: IdT;
  date: string;
} & NewNoteT;