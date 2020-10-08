import React, { Component, useState } from 'react';
import styled from 'styled-components';
import { useTable } from 'react-table';
import SlidingSidebar from './SlidingSidebar';
import Card from './Card';

import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react';

import makeData from './makeData';

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }

      input {
        font-size: rem;
        padding: 0;
        margin: 0;
        border: 0;
      }
    }
  }
`;

// Create an editable cell renderer
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

  const [sidebarVisible, setSidebarVisible] = React.useState(false);

  function openSlidingSidebar() {
    console.log('asdfjlhaslkdj');
    setSidebarVisible(true);
  }

  return (
    <div className='ui transparent fluid left icon input '>
      <i
        className='expand arrows alternate link icon'
        onClick={openSlidingSidebar}
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

function Table({ columns, data, updateMyData, skipPageReset }) {
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

function App() {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        columns: [
          {
            Header: 'First Name',
            accessor: 'firstName',
          },
          {
            Header: 'Last Name',
            accessor: 'lastName',
          },
        ],
      },
      {
        Header: 'Info',
        columns: [
          {
            Header: 'Age',
            accessor: 'age',
          },
          {
            Header: 'Visits',
            accessor: 'visits',
          },
          {
            Header: 'Status',
            accessor: 'status',
          },
          {
            Header: 'Profile Progress',
            accessor: 'progress',
          },
        ],
      },
    ],
    []
  );

  const [data] = React.useState(() => makeData(20));

  return (
    <>
      <div>
        <h1 className='ui inverted segment centered header brown'>
          מנחם באקלייניק - ICTBIT
        </h1>
      </div>

      <SlidingSidebar
        visible={true}
        direction={'right'}
        width={'very wide'}
        // animation={'scale down'}
      />

      <Styles>
        <Table columns={columns} data={data} />
      </Styles>
    </>
  );
}

export default App;

// className App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       truncateText: true,
//     };
//   }

//   render() {
//     const columns = [
//       {
//         Header: 'Name',
//         columns: [
//           {
//             Header: 'First Name',
//             accessor: 'firstName',
//           },
//           {
//             Header: 'Last Name',
//             accessor: 'lastName',
//           },
//         ],
//       },
//       {
//         Header: 'Info',
//         columns: [
//           {
//             Header: 'Random Number',
//             accessor: 'age',
//           },
//           {
//             Header: 'Visits',
//             accessor: 'visits',
//           },
//           {
//             Header: 'Profile Progress',
//             accessor: 'progress',
//           },
//         ],
//       },
//     ];

//     const data = makeData(20);

//     return (
//       <Styles>
//         <Table columns={columns} data={data} />
//       </Styles>
//     );
//   }
// }

// export default App;
