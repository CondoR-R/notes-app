import React from 'react';
import cn from 'classnames';
import style from './NoteList.module.scss';

interface Props {
  className?: string;
}

export const NoteList: React.FC<Props> = ({className}) => {
  return (
    <div className={cn(style.wrapper, className)}>
      <h2>Мои заметки</h2>
    </div>
  )
}