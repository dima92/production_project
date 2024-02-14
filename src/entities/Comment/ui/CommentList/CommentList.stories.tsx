import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { CommentList } from './CommentList';

const meta = {
  title: 'shared/CommentList',
  component: CommentList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof CommentList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {},
};
