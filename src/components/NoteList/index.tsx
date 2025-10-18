import React, {useContext} from 'react';
import cn from 'classnames';
import style from './NoteList.module.scss';
import {StateContext} from "@/state/notes-reducer.ts";
import {NoteItem} from "@/components";

interface Props {
  className?: string;
}

export const NoteList: React.FC<Props> = ({className}) => {
  const {notes} = useContext(StateContext);

  return (
    <div className={cn(style.wrapper, className)}>
      <h2>Мои заметки</h2>
      <ul>
        {notes.map((note, index) => (
          <NoteItem
            key={index}
            note={note}
          />
        ))}
      </ul>
    </div>
  )
}