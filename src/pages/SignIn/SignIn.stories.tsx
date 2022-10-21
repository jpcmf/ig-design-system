import { rest } from 'msw';
import { expect } from '@storybook/jest';
import { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, waitFor } from '@storybook/testing-library';

import { SignIn } from './index';

export default {
  title: 'Pages/Sign in',
  component: SignIn,
  args: {},
  argTypes: {},
  parameters: {
    msw: {
      handlers: [
        rest.post('/sessions', (req, res, ctx) => {
          return res(ctx.json({ message: 'login successful!' }));
        }),
      ],
    },
  },
} as Meta;

export const Default: StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    userEvent.type(
      canvas.getByPlaceholderText('E-mail address'),
      'johndoe@example.com'
    );
    userEvent.type(canvas.getByPlaceholderText('*****'), '123456789');

    userEvent.click(canvas.getByRole('button'));

    await waitFor(() => {
      return expect(canvas.getByText('login successful!')).toBeInTheDocument();
    });
  },
};
