import React, { Component } from 'react';
import { Accordion } from 'semantic-ui-react';

// TODO: This component is not in use and does not work properly. Read the Readme to understand why this component exists (inteded for use as table data expansion / master - detail component.)
export default class AccordionExampleStandard extends Component {
  state = { activeIndex: 0 };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex } = this.state;

    return (
      <Accordion fluid={true}>
        <Accordion.Title active={activeIndex === 0} index={0}></Accordion.Title>

        <Accordion.Content active={true} index={0} onClick={this.handleClick}>
          <p>
            A dog is a type of domesticated animal. Known for its loyalty and
            faithfulness, it can be found as a welcome guest in many households
            across the world.
          </p>
        </Accordion.Content>
      </Accordion>
    );
  }
}
