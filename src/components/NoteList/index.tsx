import React, {useContext} from 'react';
import cn from 'classnames';
import style from './NoteList.module.scss';
import {StateContext} from "@/state/notes-reducer.ts";
import {NoteItem, SearchBar, SortControls} from "@/components";

interface Props {
  className?: string;
}

export const NoteList: React.FC<Props> = ({className}) => {
  const {notes, searchQuery, sortOrder} = useContext(StateContext);

  const renderNotes = notes
    .filter(({
               title,
               content
             }) => (
      title.toLowerCase().includes(searchQuery.toLowerCase())
      || content.toLowerCase().includes(searchQuery.toLowerCase())))
    .sort((a, b) => {
      return sortOrder === 'asc'
        ? (+new Date(b.date) - +new Date(a.date))
        : (+new Date(a.date) - +new Date(b.date));
    })
    .map((note) => (
      <NoteItem
        key={note.id}
        note={note}
      />
    ))

  return (
    <div className={cn(style.wrapper, className, 'border')}>
      <h2 className={style.title}>Мои заметки</h2>
      <div className={style.filtersBox}>
        <SearchBar className={style.search} />
        <SortControls />
      </div>
      {renderNotes.length > 0 ? (<ul className={style.list}>
        {renderNotes}
      </ul>) : (<p className={style.empty}>Пусто...</p>)}


    </div>
  )
}