import React from 'react';
import {
  Button,
  Checkbox,
  Grid,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
  Form,
  Container,
  TextArea,
  Divider,
  Card,
  SidebarPushable,
} from 'semantic-ui-react';

function SlidingSidebar(props) {
  function displayContent() {
    return Object.values(props.sidebarContent).map((cell) => {
      console.log('displayContent -> cell', cell);

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
  const [visible, setVisible] = React.useState(false);

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
        <Menu.Item as='a' onClick={clearRowData}>
          <Icon name='delete' />
          Clear All Row Data
        </Menu.Item>

        {displayContent()}
      </Sidebar>
    </>
  );
}

// import React from 'react';

// export default function SlidingSidebar() {
//   return (
//     <div style={{ marginTop: '100px' }} class='ui container'>
//       <h2>Sidebar</h2>

//       <button class='ui button primary'>Show Menu</button>

//       <div
//         class='ui sidebar inverted visible
//                         vertical menu'
//       >
//         <h2 style={{ color: 'white' }}>Menu</h2>
//         <a class='item'>Data Structure</a>
//       </div>
//       <div class='pusher'></div>

//       <h2>Hello welcome to geeksforgeeks</h2>
//     </div>
//   );
// }

// function exampleReducer(state, action) {
//   switch (action.type) {
//     case 'CHANGE_ANIMATION':
//       return { ...state, animation: action.animation, visible: !state.visible };
//     case 'CHANGE_DIMMED':
//       return { ...state, dimmed: action.dimmed };
//     case 'CHANGE_DIRECTION':
//       return { ...state, direction: action.direction, visible: false };
//     default:
//       throw new Error();
//   }
// }

// function SidebarExampleTransitions() {
//   const [state, dispatch] = React.useReducer(exampleReducer, {
//     animation: 'overlay',
//     direction: 'right',
//     dimmed: false,
//     visible: false,
//   });

//   const { animation, dimmed, direction, visible } = state;
//   const vertical = direction === 'bottom' || direction === 'top';

//   return (
//     <div>
//       <Header as='h5'>Direction</Header>
//       <Button.Group>
//         <Button
//           active={direction === 'right'}
//           onClick={() =>
//             dispatch({ type: 'CHANGE_DIRECTION', direction: 'right' })
//           }
//         >
//           Right
//         </Button>
//       </Button.Group>

//       <Button
//         onClick={() =>
//           dispatch({ type: 'CHANGE_ANIMATION', animation: 'overlay' })
//         }
//       >
//         Overlay
//       </Button>

//       <Button
//         onClick={() =>
//           dispatch({ type: 'CHANGE_ANIMATION', animation: 'scale down' })
//         }
//       >
//         Scale Down
//       </Button>

//       <Sidebar.Pushable as={Segment} style={{ overflow: 'hidden' }}>
//         {!vertical && (
//           <VerticalSidebar
//             animation={animation}
//             direction={direction}
//             visible={visible}
//           />
//         )}

//         <Sidebar.Pusher dimmed={dimmed && visible}>
//           <Segment basic>
//             <Header as='h3'>Application Content</Header>
//           </Segment>
//         </Sidebar.Pusher>
//       </Sidebar.Pushable>
//     </div>
//   )
// }

export default SlidingSidebar;
