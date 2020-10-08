import React, { Component } from 'react';
import { Accordion, AccordionPanel } from 'semantic-ui-react';

export default class AccordionExampleStandard extends Component {
  state = { activeIndex: 0 };

  handleClick = (e, titleProps) => {
    console.log('awesdf');
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex } = this.state;

    const panels = [
      {
        key: 'what-is-dog',
        title: 'What is a dog?',
        content: [
          'A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome',
          'guest in many households across the world.',
        ].join(' '),
      },
    ];

    return (
      <Accordion fluid={true}>
        {/* <Accordion.Title
            active='false'
              // active={activeIndex === 0}
            index={0}
          > */}
        {/* </Accordion.Title> */}
        <Accordion.Panel
          key={1234}
          title={'test tiel'}
          content={'asdfasd'}
          onClick={this.handleTitleClick}
        ></Accordion.Panel>

        {/* <Accordion.Content
            active={true}
            index={0}
            onClick={this.handleClick}
          >
            <p>
              A dog is a type of domesticated animal. Known for its loyalty and
              faithfulness, it can be found as a welcome guest in many households
              across the world.
            </p>
          </Accordion.Content> */}
      </Accordion>
      // <Accordion
      //   activeIndex={activeIndex}
      //   panels={panels}
      //   onClick={this.handleTitleClick}
      // />
    );
  }
}
//   return (
//     <div class='accordion ui fluid styled active-index=-1'>
//       {/* <div class='active title'>
//         <i aria-hidden='true' class='dropdown icon'></i>What is a dog?
//       </div> */}
//       <div class='content active'>
//         <p>
//           A dog is a type of domesticated animal.
//         </p>
//       </div>
//     </div>
//   );
// }
