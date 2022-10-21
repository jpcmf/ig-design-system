import { Meta, StoryObj } from '@storybook/react';
import { SignIn } from './index';
import { within, userEvent, waitFor } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

export default {
  title: 'Pages/Sign in',
  component: SignIn,
  args: {},
  argTypes: {},
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
      return expect(canvas.getByText('Login success!')).toBeInTheDocument();
    });
  },
};
