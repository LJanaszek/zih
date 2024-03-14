import type { Meta, StoryObj } from '@storybook/react';

import { ButtonLike } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Atoms/ButtonLike',
  component: ButtonLike,
  tags: ['autodocs']
} satisfies Meta<typeof ButtonLike>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const AsButton: Story = {
  args: {
    children: 'To jest cos co wyglada jak button'
  },
  render: (args) => {
    return <ButtonLike {...args}><div>{args.children}</div></ButtonLike>
  }
};

export const AsButtonInverted: Story = {
  args: {
    ...AsButton.args,
    buttonType: 'inverted'
  },
  render: AsButton.render
};
