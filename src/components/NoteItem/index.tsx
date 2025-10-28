import React, {useContext} from 'react';
import type {NoteT} from "@/types";
import cn from "classnames";
import {DispatchContext} from "@/state/notes-reducer.ts";
import style from "./NoteItem.module.scss";

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
    <li className={cn(style.item, className)}>
      <div className={style.header}>
        <h3>{note.title}</h3>
        <button
          type="button"
          onClick={onClickDeleteNote}
          className={style.delete}
        >
          Удалить
        </button>
      </div>
      <div className={style.body}>
        <p>{note.content}</p>
        <span className={style.date}>{new Date(note.date).toLocaleString()}</span>
      </div>

    </li>
  )
}