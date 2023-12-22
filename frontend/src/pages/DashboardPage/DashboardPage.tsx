import './DashboardPage.css';
import { Table } from '../../components/Table';
import { SearchForm } from '../../components';
import { useContext, useEffect, useMemo } from 'react';
import { GeneralContext } from '../../contexts/GeneralContext';
import { useNavigate } from 'react-router-dom';
import { Status } from '../../types/types';

export const DashboardPage = () => {
  const {
    joinedData,
    setDataLength,
    searchText,
    findTest,
    testToShow,
    direction,
    sortedField,
  } = useContext(GeneralContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (testToShow?.status) {
      navigate(
        `/${
          testToShow?.status === Status.DRAFT
            ? `finalize/${testToShow.id}`
            : `results/${testToShow.id}`
        }`
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [findTest]);

  //table filtering function
  const filteredData = useMemo(() => {
    const filteredData = [...joinedData];
    if (!searchText) {
      return filteredData;
    }
    return filteredData.filter((el) =>
      el.name.toLocaleLowerCase().includes(searchText.toLowerCase())
    );
  }, [searchText, joinedData]);

  // table sorting function
  const sortedData = useMemo(() => {
    let sortedData = [...filteredData];
    const order = direction !== 'desc' ? 1 : -1;
    const dataWithOutDraft = sortedData.filter((el) => el.status !== 'DRAFT');
    const dataWithDraft = sortedData.filter((el) => el.status === 'DRAFT');
    if (
      sortedField === 'name' ||
      sortedField === 'type' ||
      sortedField === 'url'
    ) {
      sortedData.sort(
        (a, b) =>
          a[sortedField]
            ?.toLocaleLowerCase()
            .localeCompare(b[sortedField].toLocaleLowerCase()) * order
      );
    } else {
      if (order === 1) {
        sortedData = [
          ...dataWithOutDraft.sort(
            (a, b) => a.status.localeCompare(b.status) * order
          ),
          ...dataWithDraft,
        ];
      } else {
        sortedData = [
          ...dataWithDraft,
          ...dataWithOutDraft.sort(
            (a, b) => a.status.localeCompare(b.status) * order
          ),
        ];
      }
    }
    return sortedData;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredData, direction, sortedField]);

  useEffect(() => {
    setDataLength(sortedData.length);
  }, [sortedData, setDataLength]);

  return (
    <section className="dashboard-page">
      <SearchForm />
      <Table data={sortedData} />
    </section>
  );
};
