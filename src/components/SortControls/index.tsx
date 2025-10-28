import React, {useContext} from 'react';
import cn from 'classnames';
import style from './SortControls.module.scss';
import {DispatchContext, StateContext} from "@/state/notes-reducer.ts";

interface Props {
  className?: string;
}

export const SortControls: React.FC<Props> = ({className}) => {
  const {sortOrder} = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  const onChangeOrder = () => {
    if (!dispatch) return;

    dispatch({type: 'CHANGE_SORT_ORDER'})
  }

  return (
    <button
      className={cn(style.sort, className, 'input', 'button')}
      onClick={onChangeOrder}
    >
      {sortOrder === 'asc' ? 'Новые сверху' : 'Старые сверху'}
    </button>
  )
}