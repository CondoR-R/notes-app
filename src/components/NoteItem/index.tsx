import React, {useContext} from 'react';
import type {NoteT} from "@/types";
import cn from "classnames";
import {DispatchContext} from "@/state/notes-reducer.ts";

interface Props {
  className?: string;
  note: NoteT;
}

export const NoteItem: React.FC<Props> = ({className, note}) => {
  const dispatch = useContext(DispatchContext);

  const onClickDeleteNote = () => {
    if (!dispatch) return;

    dispatch({type: 'REMOVE_NOTE', payload: note.id})
  }

  return (
    <li className={cn(className)}>
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <span>{note.date.toDateString()}</span>
      <button
        type="button"
        onClick={onClickDeleteNote}
      >
        Удалить
      </button>
    </li>
  )
}