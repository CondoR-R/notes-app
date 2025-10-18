import React from 'react';
import cn from 'classnames';
import style from './NoteForm.module.scss';

interface Props {
  className?: string;
}

export const NoteForm: React.FC<Props> = ({className}) => {
  return (
    <form className={cn(style.wrapper, className)}>
      <label htmlFor="">Заголовок</label>
      
    </form>
  )
}