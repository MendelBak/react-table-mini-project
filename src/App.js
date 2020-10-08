import React, { Component, useState } from 'react';
import styled from 'styled-components';
import SlidingSidebar from './SlidingSidebar';
import Table from './Table';

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
        visible={false}
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
