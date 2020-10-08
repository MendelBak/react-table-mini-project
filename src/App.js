import React, { Component, useState } from 'react';
import styled from 'styled-components';
import SlidingSidebar from './SlidingSidebar';
import Table from './Table';

import makeData from './makeData';
import {
  Sidebar,
  SidebarPusher,
  Menu,
  Checkbox,
  Dimmer,
  Grid,
  Header,
  Icon,
  Image,
  Segment,
} from 'semantic-ui-react';

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

// function App() {
//   const columns = React.useMemo(
//     () => [
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
//             Header: 'Age',
//             accessor: 'age',
//           },
//           {
//             Header: 'Visits',
//             accessor: 'visits',
//           },
//           {
//             Header: 'Status',
//             accessor: 'status',
//           },
//           {
//             Header: 'Profile Progress',
//             accessor: 'progress',
//           },
//         ],
//       },
//     ],
//     []
//   );

//   const [data] = React.useState(() => makeData(20));

//   return (
//     <>
//       <div>
//         <h1 className='ui inverted segment centered header brown'>
//           מנחם באקלייניק - ICTBIT
//         </h1>
//       </div>

//       <SlidingSidebar
//         visible={false}
//         direction={'right'}
//         width={'very wide'}
//         // animation={'scale down'}
//       />

//       <Styles>
//         <Table columns={columns} data={data} />
//       </Styles>
//     </>
//   );
// }

// export default App;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showSidebar: false,
      sidebarContent: '',
      data: makeData(20),
    };
  }

  toggleSidebar = (row) => {
    const content = row.cells.map((cellRow) => {
      return cellRow;
    });

    // Clear sidebar content on close.
    if (this.state.showSidebar === true) {
      this.setState({
        sidebarContent: '',
      });
    } else {
      this.setState({
        sidebarContent: content,
      });
    }
    console.log(content[1].value);

    this.setState({
      showSidebar: !this.state.showSidebar,
    });
  };

  clearRowData = () => {
    console.log('clear row data');
    console.log(this.state.data);

    // this.setState({
    //   data[0].firstName = ''
    // })

    // let prevStateData = { ...this.state.data };
    // console.log('asdfa', prevStateData);
    // this.setState({...this.state.data, firstName: 'Mendel'});

    // let key = 2;
    // this.setState((prevState) => ({
    //   data: prevState.data.map(
    //     ((el) => el.firstName: 'mendle')
    //     // el.key === key ? { ...el, firstName: 'done' } : el
    //   ),
    // }));

    // var x = this.state.data[0].firstName;
    // console.log(x);
    // this.setState({ x: '' });
    // console.log(this.state.data);
  };

  hideSidebar = () => {
    this.setState({ showSidebar: false });
  };

  render() {
    const columns = [
      {
        Header: 'Intrusion Detection System - Data Review',
        columns: [
          {
            Header: 'First Name',
            accessor: 'firstName',
          },
          {
            Header: 'Last Name',
            accessor: 'lastName',
          },
          {
            Header: 'Analysis Response',
            accessor: 'analysisResponse',
          },
        ],
        // },
        // {
        //   Header: 'Info',
        //   columns: [
        //     {
        //       Header: 'Random Number',
        //       accessor: 'age',
        //     },
        //     {
        //       Header: 'Visits',
        //       accessor: 'visits',
        //     },
        //     {
        //       Header: 'Profile Progress',
        //       accessor: 'progress',
        //     },
        //   ],
      },
    ];

    return (
      <>
        <div>
          <h1 className='ui inverted segment centered header brown'>
            מנחם באקלייניק - ICTBIT
          </h1>
        </div>
        {/* <Sidebar.Pushable> */}
        <SlidingSidebar
          visible={this.state.showSidebar}
          direction={'right'}
          width={'wide'}
          hideSidebar={this.hideSidebar}
          sidebarContent={this.state.sidebarContent}
          clearRowData={this.clearRowData}
        />

        <Sidebar.Pusher dimmed={true}>
          {/* <Sidebar.Pusher dimmed={true}> */}
          <Styles>
            <Table
              columns={columns}
              data={this.state.data}
              showSidebar={this.state.showSidebar}
              toggleSidebar={this.toggleSidebar}
            />
          </Styles>
        </Sidebar.Pusher>
        {/* </Sidebar.Pushable> */}
      </>
    );
  }
}

export default App;
