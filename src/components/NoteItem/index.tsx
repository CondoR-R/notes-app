import React from 'react';
import cn from 'classnames';
import style from './NoteItem.module.scss';

interface Props {
  className?: string;
}

export const NoteItem: React.FC<Props> = ({className}) => {
  return (
    <div className={cn(style.wrapper, className)}>
      NoteItem
    </div>
  )
}