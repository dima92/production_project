import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { AppLink, AppLinkTheme } from './AppLink';

const meta = {
  title: 'shared/AppLink',
  component: AppLink,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Text',
    theme: AppLinkTheme.PRIMARY,
  },
};

export const Secondary: Story = {
  args: {
    children: 'Text',
    theme: AppLinkTheme.SECONDARY,
  },
};

export const Red = {
  args: {
    children: 'Text',
    theme: AppLinkTheme.RED,
  },
};

export const PrimaryDark = {
  args: {
    children: 'Text',
    theme: AppLinkTheme.PRIMARY,
  },
  decorators: [
    ThemeDecorator(Theme.DARK),
  ],
};

export const SecondaryDark = {
  args: {
    children: 'Text',
    theme: AppLinkTheme.SECONDARY,
  },
  decorators: [
    ThemeDecorator(Theme.DARK),
  ],
};

export const RedDark = {
  args: {
    children: 'Text',
    theme: AppLinkTheme.RED,
  },
  decorators: [
    ThemeDecorator(Theme.DARK),
  ],
};
