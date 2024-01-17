import type { Meta, StoryObj } from '@storybook/react';

import { Popup } from './popup';
import { useState } from 'react';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Molecules/Popup',
  component: Popup,
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      const [show, setShow] = useState(false);

      return <>
        <button onClick={() => setShow(true)}>Otwórz</button>
        {show && <Story />}
      </>
    }
  ]
} satisfies Meta<typeof Popup>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Base: Story = {
  args: {},

  render: (args) => {
    return <Popup {...args}>
      <p>To jest jakiś popup...</p>
    </Popup>
  }
};
