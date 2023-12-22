import { FC } from 'react';

import { ContextProviderProps } from './types/types';
import { GeneralContext } from './GeneralContext';

export const Contexts: FC<ContextProviderProps> = ({
  children,
  joinedData,
  setJoinedData,
  dataLength,
  setDataLength,
  searchText,
  setSearchText,
  findTest,
  testToShow,
  setTestToShow,
  direction,
  setDirection,
  sortedField,
  setSortedField,
}) => {
  return (
    <GeneralContext.Provider
      value={{
        joinedData,
        setJoinedData,
        dataLength,
        setDataLength,
        searchText,
        setSearchText,
        findTest,
        testToShow,
        setTestToShow,
        direction,
        setDirection,
        sortedField,
        setSortedField,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};
