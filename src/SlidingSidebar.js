import React from 'react';
import { Menu, Sidebar, Card, Icon } from 'semantic-ui-react';

function SlidingSidebar(props) {
  function displayContent() {
    return Object.values(props.sidebarContent).map((cell) => {
      return (
        <Card
          centered
          raised
          color='red'
          key={`${cell.column.Header} ${cell.row.id}`}
        >
          <Card.Header as='h4' content={cell.column.Header} />
          <Card.Content content={cell.value} />
        </Card>
      );
    });
  }

  function clearRowData() {
    props.clearRowData();
  }

  function hideSidebar() {
    props.hideSidebar();
  }

  return (
    <>
      <Sidebar
        as={Menu}
        style={{ background: 'grey' }}
        animation={'scale down'}
        direction={props.direction}
        icon='labeled'
        inverted
        vertical
        onHide={hideSidebar}
        visible={props.visible}
        width={props.width}
      >
        <Menu.Item
          as='a'
          onClick={clearRowData}
          style={{ background: 'black' }}
        >
          <Icon name='delete' />
          Clear All Row Data
        </Menu.Item>

        {displayContent()}
      </Sidebar>
    </>
  );
}

export default SlidingSidebar;
