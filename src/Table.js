import React from 'react';
import { useTable } from 'react-table';
import TableAccordion from './TableAccordion';
import Card from './Card';

const EditableCell = ({
  value: initialValue,
  row: { index },
  column: { id },
}) => {
  const [value, setValue] = React.useState(initialValue);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  function clearInputValue() {
    setValue('');
  }

  // const [showSidebar, setShowSidebar] = React.useState(false);

  function openSlidingSidebar() {
    // console.log(props.showSidebar);
    // setShowSidebar(true);
  }

  return (
    <div className='ui transparent fluid left icon input '>
      <i className='expand arrows alternate link icon'></i>
      <input
        type='text'
        value={value}
        onChange={onChange}
        style={{ maxWidth: '90%' }}
      />
      <i
        className='delete link icon'
        style={{ left: 'auto', right: '1px' }}
        onClick={clearInputValue}
      ></i>
    </div>
  );
};

// Set our editable cell renderer as the default Cell renderer
const defaultColumn = {
  Cell: EditableCell,
};

export default function Table({ columns, data, showSidebar, toggleSidebar }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    rows,
  } = useTable({
    columns,
    data,
    defaultColumn,
  });

  function openTableAccordion() {}

  function openSlidingSidebar() {
    console.log('test');
    // toggleSidebar;
  }

  return (
    <>
      <Card />

      <div className='ui basic center aligned segment'>
        <div className='ui horizontal divider'>Data Table</div>
      </div>

      <table
        {...getTableProps()}
        className='ui definition  selectable striped table accordion'
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              <th></th>
              {headerGroup.headers.map((column) => (
                <>
                  <th
                    {...column.getHeaderProps()}
                    style={{ textAlign: 'center' }}
                  >
                    {column.render('Header')}
                  </th>
                </>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} className='ui content'>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                <td
                  class='collapsing'
                  onClick={() => {
                    toggleSidebar(row);
                  }}
                >
                  <i
                    aria-hidden='true'
                    class=' ui fitted arrow down link icon'
                  ></i>
                </td>
                {row.cells.map((cell) => {
                  return (
                    <>
                      <td {...cell.getCellProps()}>
                        {cell.render('Cell')}
                        {/* <TableAccordion /> */}
                      </td>
                    </>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
