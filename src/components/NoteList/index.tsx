import React, {useContext} from 'react';
import cn from 'classnames';
import style from './NoteList.module.scss';
import {StateContext} from "@/state/notes-reducer.ts";
import {NoteItem, SearchBar} from "@/components";

interface Props {
  className?: string;
}

export const NoteList: React.FC<Props> = ({className}) => {
  const {notes, searchQuery} = useContext(StateContext);

  const renderNotes = notes
    .filter(({
               title,
               content
             }) => (
      title.toLowerCase().includes(searchQuery.toLowerCase())
      || content.toLowerCase().includes(searchQuery.toLowerCase())))
    .map((note) => (
      <NoteItem
        key={note.id}
        note={note}
      />
    ))

  return (
    <div className={cn(style.wrapper, className)}>
      <h2>Мои заметки</h2>
      <SearchBar />
      <ul>
        {renderNotes}
      </ul>
    </div>
  )
}