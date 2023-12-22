import { TestSite } from '../../types/types';
import { ReactNode, Dispatch, SetStateAction } from 'react';

export interface ContextValues {
  joinedData: TestSite[];
  setJoinedData: Dispatch<SetStateAction<TestSite[]>>;
  dataLength: number;
  setDataLength: Dispatch<SetStateAction<number>>;
  searchText: string;
  setSearchText: Dispatch<SetStateAction<string>>;
  findTest(id: string): TestSite | undefined;
  testToShow: TestSite | undefined;
  setTestToShow: Dispatch<SetStateAction<TestSite | undefined>>;
  direction: string;
  setDirection: Dispatch<SetStateAction<string>>;
  sortedField: string;
  setSortedField: Dispatch<SetStateAction<string>>;
}
export interface ContextProviderProps extends ContextValues {
  children: ReactNode;
}
