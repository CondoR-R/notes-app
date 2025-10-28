import React, {useContext, useEffect, useRef, useState} from 'react';
import cn from 'classnames';
import style from './NoteForm.module.scss';
import {DispatchContext} from "@/state/notes-reducer.ts";

interface Props {
  className?: string;
}

export const NoteForm: React.FC<Props> = ({className}) => {
  const [titleValue, setTitleValue] = useState<string>('');
  const [contentValue, setContentValue] = useState<string>('');

  const titleRef = useRef<HTMLInputElement>(null);

  const dispatch = useContext(DispatchContext);

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitleValue(e.target.value);
  }

  const onChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContentValue(e.target.value);
  }

  const onCreateNote = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!dispatch || titleValue === '' && contentValue === '') return;

    dispatch({
      type: 'ADD_NOTE',
      payload: {title: titleValue, content: contentValue}
    });
    setTitleValue('');
    setContentValue('');
  }

  useEffect(() => {
    titleRef.current?.focus();
  }, [])

  return (
    <form
      className={cn(style.wrapper, className, 'border')}
      onSubmit={onCreateNote}
    >
      <h2 className={style.title}>Новая заметка</h2>
      <label htmlFor="new-note-title">
        <input
          ref={titleRef}
          id="new-note-title"
          value={titleValue}
          onChange={onChangeTitle}
          placeholder={'Заголовок'}
        />
      </label>
      <label htmlFor="new-note-content">
        <textarea
          id="new-note-content"
          cols={30}
          rows={10}
          value={contentValue}
          onChange={onChangeContent}
          placeholder={'Заметка'}
        />
      </label>
      <input
        type={'submit'}
        value={'Создать'}
      />
    </form>
  )
}