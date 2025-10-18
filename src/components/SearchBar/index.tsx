import React, {useContext} from 'react';
import {DispatchContext, StateContext} from "@/state/notes-reducer.ts";
import cn from "classnames";

interface Props {
  className?: string;
}

export const SearchBar: React.FC<Props> = ({className}) => {
  const {searchQuery} = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  // так как данные хранятся локально, делать debounce или задержку нет смысла, поэтому передаем значение сразу в reducer
  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!dispatch) return;
    dispatch({type: 'CHANGE_SEARCH_QUERY', payload: e.target.value});
  }

  return (
    <input
      className={cn(className)}
      placeholder={'Поиск...'}
      value={searchQuery}
      onChange={onChangeSearch}
    />
  )
}