import './FinalizePage.css';
import { useContext } from 'react';
import { GeneralContext } from '../../contexts/GeneralContext';
import { Table } from '../../components/Table';
import { TestSite } from '../../types/types';

export const FinalizePage = () => {
  const { testToShow } = useContext(GeneralContext);
  return (
    <section className="finalize-page">
      <Table data={[testToShow as TestSite]} />
    </section>
  );
};
