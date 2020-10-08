import React from 'react';
import { useTable } from 'react-table';
// import EditableCell from './EditableCell';
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

  // const [sidebarVisible, setSidebarVisible] = React.useState(false);

  // function openSlidingSidebar() {
  //   console.log('asdfjlhaslkdj');
  //   setSidebarVisible(true);
  // }

  return (
    <div className='ui transparent fluid left icon input '>
      <i
        className='expand arrows alternate link icon'
        // onClick={openSlidingSidebar}
      ></i>
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

export default function Table({ columns, data, updateMyData, skipPageReset }) {
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

  return (
    <>
      <Card />

      <div className='ui basic center aligned segment'>
        <div className='ui horizontal divider'>Data Table</div>
      </div>

      <table {...getTableProps()} className='ui celled table'>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
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
