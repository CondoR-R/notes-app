import React, {useContext, useState} from 'react';
import type {NoteT} from "@/types";
import cn from "classnames";
import {DispatchContext} from "@/state/notes-reducer.ts";
import style from "./NoteItem.module.scss";

interface Props {
  className?: string;
  note: NoteT;
}

export const NoteItem: React.FC<Props> = ({className, note}) => {
  const [isChange, setIsChange] = useState<boolean>(false);

  const dispatch = useContext(DispatchContext);

  const onClickDeleteNote = () => {
    if (!dispatch) return;

    dispatch({type: 'REMOVE_NOTE', payload: note.id})
  }

  const onClickChangeNote = () => {
    if (!dispatch) return;

    setIsChange(prev => !prev);
  }

  const onChangeNoteTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!dispatch) return;

    dispatch({
      type: 'CHANGE_NOTE',
      payload: {...note, title: e.target.value, date: (new Date()).toString()}
    });
  }

  const onChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (!dispatch) return;

    dispatch({
      type: 'CHANGE_NOTE',
      payload: {...note, content: e.target.value, date: (new Date()).toString()}
    });
  }

  return (
    <li className={cn(style.item, className)}>
      <div className={style.header}>
        {isChange ? (<input
            value={note.title}
            placeholder={'Заголовок'}
            onChange={onChangeNoteTitle}
            className={'input'}
          />) :
          <h3>{note.title}</h3>}
        <button
          type="button"
          onClick={onClickDeleteNote}
          className={cn(style.button, style.delete)}
        >
          Удалить
        </button>
      </div>
      <div className={style.body}>
        {isChange ? (<textarea
          cols={30}
          rows={10}
          value={note.content}
          onChange={onChangeContent}
          placeholder={'Заметка'}
          className={'input'}
        />) : (<p>{note.content}</p>)}
        <div className={style.bodyBottom}>
          <span className={style.date}>{new Date(note.date).toLocaleString()}</span>
          <button
            className={cn(style.button, style.change)}
            type="button"
            onClick={onClickChangeNote}
          >
            {isChange ? 'Сохранить' : 'Изменить'}
          </button>
        </div>
      </div>
    </li>
  )
}