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
} from 'semantic-ui-react';

const VerticalSidebar = (props) => (
  <Sidebar
    as={Menu}
    animation={props.animation}
    direction={props.direction}
    icon='labeled'
    inverted
    vertical
    visible={props.visible}
    width={props.width}
  >
    <Menu.Item as='a'>
      <Icon name='camera' />
      Channels
    </Menu.Item>
  </Sidebar>
);

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

export default VerticalSidebar;
