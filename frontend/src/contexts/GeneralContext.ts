import { createContext } from 'react';
import { ContextValues } from './types/types';

export const GeneralContext = createContext<ContextValues>({} as ContextValues);
