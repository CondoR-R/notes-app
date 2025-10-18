import React, {useContext, useState} from 'react';
import cn from 'classnames';
import style from './NoteForm.module.scss';
import {DispatchContext} from "@/state/notes-reducer.ts";

interface Props {
  className?: string;
}

export const NoteForm: React.FC<Props> = ({className}) => {
  const [titleValue, setTitleValue] = useState<string>('');
  const [contentValue, setContentValue] = useState<string>('');
  const dispatch = useContext(DispatchContext);

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitleValue(e.target.value);
  }

  const onChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContentValue(e.target.value);
  }

  const onCreateNote = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!dispatch) return;

    dispatch({
      type: 'ADD_NOTE',
      payload: {title: titleValue, content: contentValue}
    });
    setTitleValue('');
    setContentValue('');
  }

  return (
    <form
      className={cn(style.wrapper, className)}
      onSubmit={onCreateNote}
    >
      <h2>Новая заметка</h2>
      <label htmlFor="new-note-title">
        <span>Заголовок:</span>
        <input
          id="new-note-title"
          value={titleValue}
          onChange={onChangeTitle}
        />
      </label>
      <label htmlFor="new-note-content">
        <span>Заметка:</span>
        <textarea
          id="new-note-content"
          cols={30}
          rows={10}
          value={contentValue}
          onChange={onChangeContent}
        />
      </label>
      <input
        type={'submit'}
        value={'Создать'}
      />
    </form>
  )
}