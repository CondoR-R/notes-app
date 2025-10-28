import React from 'react';
import cn from 'classnames';
import style from './SortControls.module.scss';

interface Props {
  className?: string;
}

export const SortControls: React.FC<Props> = ({className}) => {
  return (
    <button className={cn(style.sort, className, 'input', 'button')}>
      Новые сверху
    </button>
  )
}