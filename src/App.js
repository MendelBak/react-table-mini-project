import React, { Component, useState, useReducer } from 'react';
import styled from 'styled-components';
import { useTable, useRowState } from 'react-table';
import {} from 'semantic-ui-react';

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
        font-size: 1rem;
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
  updateMyData,
}) => {
  const [value, setValue] = React.useState(initialValue);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  function test() {
    setValue('');
  }

  // // We'll only update the external data when the input is blurred
  // const onBlur = () => {
  //   updateMyData(index, id, value);
  // };

  // // If the initialValue is changed external, sync it up with our state
  // React.useEffect(() => {
  //   setValue(initialValue);
  // }, [initialValue]);

  return (
    <div className='ui transparent fluid icon input'>
      <input type='text' value={value} onChange={onChange}/>
      <i className='delete link icon' onClick={test}></i>
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
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      // use the skipPageReset option to disable page resetting temporarily
      autoResetPage: !skipPageReset,
      // updateMyData isn't part of the API, but
      // anything we put into these options will
      // automatically be available on the instance.
      // That way we can call this function from our
      // cell renderer!
      updateMyData,
    },
    useRowState
  );

  // const [truncateStyle, toggleTruncateStyle] = useState(true);
  // HACK: This is a hack to force update the component after cell.state.truncate has changed. There is much better ways to do this (like modifying state), but this works for the example project.
  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);

  function toggleTruncate(cell) {
    console.log(cell.state);
    // console.log(e.target);
    // console.log(cell.getCellProps());
    // console.log(cell.row.id)
    // console.log(cell.column.id)
    cell.state.truncate = !cell.state.truncate;
    // HACK: See above comment.
    // forceUpdate();
    console.log(cell.state);
  }

  const textStyle = {
    // display: 'inline-block',
    maxWidth: '150px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  };

  // const calculateStyle = (cell) => {
  //   console.log(cell)

  //   // if (cell.state.truncate) {
  //     // return textStyle;
  //   // }
  //   // return null;
  // }

  return (
    <>
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
                  {
                    /* Problem: every rerender this gets reset to all true. */
                  }
                  {
                    /* cell.state.truncate = true; */
                  }
                  return (
                    <td
                      // onClick={() => toggleTruncate(cell)}
                      // onClick={(event) => toggleTruncate(event, cell)}
                      // style={cell.state.truncate ? textStyle : null}
                      {...cell.getCellProps()}
                    >
                      {cell.render('Cell')}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* <p onClick={toggleTruncate} style={calculateStyle()}>
        'Hello world. Please come again enext asldkjfahsdl kfjhasd lfkjah
        sdkfljash dflkjs'
      </p> */}
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

  const [data, setData] = React.useState(() => makeData(20));
  const [originalData] = React.useState(data);
  const [skipPageReset, setSkipPageReset] = React.useState(false);

  // We need to keep the table from resetting the pageIndex when we
  // Update data. So we can keep track of that flag with a ref.

  // When our cell renderer calls updateMyData, we'll use
  // the rowIndex, columnId and new value to update the
  // original data
  const updateMyData = (rowIndex, columnId, value) => {
    // We also turn on the flag to not reset the page
    setSkipPageReset(true);
    setData((old) =>
      old.map((row, index) => {
        if (index === rowIndex) {
          return {
            ...old[rowIndex],
            [columnId]: value,
          };
        }
        return row;
      })
    );
  };

  // After data changes, we turn the flag back off
  // so that if data actually changes when we're not
  // editing it, the page is reset
  React.useEffect(() => {
    setSkipPageReset(false);
  }, [data]);

  // Let's add a data resetter/randomizer to help
  // illustrate that flow...
  const resetData = () => setData(originalData);

  return (
    <Styles>
      <button onClick={resetData}>Reset Data</button>
      <Table
        columns={columns}
        data={data}
        updateMyData={updateMyData}
        skipPageReset={skipPageReset}
      />
    </Styles>
  );
}

export default App;

// class App extends Component {
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
