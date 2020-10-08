import React, { Component } from 'react';
import styled from 'styled-components';
import { Sidebar } from 'semantic-ui-react';

// Internal Components
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

    this.setState({
      showSidebar: !this.state.showSidebar,
    });
  };

  // TODO: This function does not work. See Readme for more details.
  clearRowData = (i) => {
    // console.log(this.state.data);

    // this.setState(function (state, props) {
    //   const newData = state.data.slice();
    //   newData[i] = Object.keys(newData[i]).reduce(
    //     (r, k) => ({ ...r, [k]: '' }),
    //     {}
    //   );
    //   return {
    //     ...state,
    //     data: newData,
    //   };
    // });

    // let prevStateData = { ...this.state.data };
    // this.setState({...this.state.data, firstName: 'Mendel'});
    // let key = 2;
    // this.setState((prevState) => ({
    //   data: prevState.data.map(
    //     ((el) => el.firstName: 'menachem)
    //     // el.key === key ? { ...el, firstName: 'done' } : el
    //   ),
    // }));
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
      },
    ];

    return (
      <>
        <div>
          <h1 className='ui inverted segment centered header brown'>
            מנחם באקלייניק - ICTBIT
          </h1>
        </div>
        <Sidebar.Pushable>
          <SlidingSidebar
            visible={this.state.showSidebar}
            direction={'right'}
            width={'wide'}
            hideSidebar={this.hideSidebar}
            sidebarContent={this.state.sidebarContent}
            clearRowData={this.clearRowData}
          />

          <Sidebar.Pusher dimmed={this.state.showSidebar}>
            <Styles>
              <Table
                columns={columns}
                data={this.state.data}
                showSidebar={this.state.showSidebar}
                toggleSidebar={this.toggleSidebar}
              />
            </Styles>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </>
    );
  }
}

export default App;
