import './Table.css';
import { FC, useContext } from 'react';
import { GeneralContext } from '../../contexts/GeneralContext';
import { Status } from '../../types/types';
import { TableProps } from './types/types';
import { ReactComponent as Icon } from '../../assets/icons/chevron_up.svg';
import { NothingFound } from '../NothingFound';

export const Table: FC<TableProps> = ({ data }) => {
  const { findTest, direction, setDirection, sortedField, setSortedField } =
    useContext(GeneralContext);

  // cell 'status' font color setter
  let color: string;
  function statusColor(status: Status) {
    switch (status) {
      case Status.ONLINE:
        color = 'table__cell_title-color_green';
        break;
      case Status.PAUSED:
        color = 'table__cell_title-color_orange';
        break;
      case Status.STOPPED:
        color = 'table__cell_title-color_red';
        break;
      case Status.DRAFT:
        color = 'table__cell_title-color_grey';
        break;
    }
    return color;
  }

  // row's left border color setter
  let borderColor: string;
  function leftBorderColor(id: number) {
    switch (id) {
      case 1:
        borderColor = 'table__row_border-color_red';
        break;
      case 2:
        borderColor = 'table__row_border-color_purple';
        break;
      case 3:
        borderColor = 'table__row_border-color_dark-purple';
        break;
    }
    return borderColor;
  }
  // // function requesting to sort data according to column name and asc/desc direction
  function requestSorting(sortedField: string) {
    setSortedField(sortedField);
    direction === ''
      ? setDirection('asc')
      : direction === 'asc'
        ? setDirection('desc')
        : setDirection('asc');
  }

  return data?.length === 0 ? (
    <NothingFound />
  ) : (
    <section className="table">
      <div className="table__header">
        <div className="table__header-cell">
          <button
            className="table__header-button"
            onClick={() => {
              requestSorting('name');
            }}
          >
            Name
          </button>
          {sortedField === 'name' && (
            <Icon
              className={`table__header-arrow ${
                direction === 'desc' ? 'table__header-arrow_reversed' : ''
              }`}
            ></Icon>
          )}
        </div>
        <div className="table__header-cell">
          <button
            className="table__header-button"
            onClick={() => {
              requestSorting('type');
            }}
          >
            Type
          </button>
          {sortedField === 'type' && (
            <Icon
              className={`table__header-arrow ${
                direction === 'desc' ? 'table__header-arrow_reversed' : ''
              }`}
            ></Icon>
          )}
        </div>
        <div className="table__header-cell">
          <button
            className="table__header-button"
            onClick={() => {
              requestSorting('status');
            }}
          >
            Status
          </button>
          {sortedField === 'status' && (
            <Icon
              className={`table__header-arrow ${
                direction === 'desc' ? 'table__header-arrow_reversed' : ''
              }`}
            ></Icon>
          )}
        </div>
        <div className="table__header-cell">
          <button
            className="table__header-button"
            onClick={() => {
              requestSorting('url');
            }}
          >
            Site
          </button>
          {sortedField === 'url' && (
            <Icon
              className={`table__header-arrow ${
                direction === 'desc' ? 'table__header-arrow_reversed' : ''
              }`}
            ></Icon>
          )}
        </div>
      </div>
      <div className="table__body">
        {data?.map((el) => {
          return (
            <div
              className={`table__row ${leftBorderColor(el.siteId as number)}`}
              key={el.id}
            >
              <div className="table__cell">{el.name}</div>
              <div className="table__cell">{el.type}</div>
              <div
                className={`table__cell ${statusColor(el.status as Status)}`}
              >
                {el.status}
              </div>
              <div className="table__cell">{el.url}</div>
              <div className="table__cell">
                <button
                  onClick={(event) => findTest(event.currentTarget.id)}
                  id={el.id.toString()}
                  className={`table__cell-button ${
                    el.status === Status.DRAFT
                      ? 'table__cell-button_bg-color_grey'
                      : ''
                  }`}
                >
                  {el.status === Status.DRAFT ? 'Finalize' : 'Results'}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
