import { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, waitFor } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { rest } from 'msw'
import { Signin } from "./Signin";


export default {
  title: 'Components/Signin',
  component: Signin,
  args: {},
  argTypes: {},
  parameters: {
  msw: {
    handlers: [
      rest.post('/sessions', (req, res, ctx) => {
          return res(ctx.json({
            message: 'something'
          }))
        })
      ],
    },
  }
} as Meta

export const Default: StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    userEvent.type(canvas.getByPlaceholderText('example@email.com'), 'test@test.com')
    userEvent.type(canvas.getByPlaceholderText('************'), '123456789012')

    userEvent.click(canvas.getByRole('button'))

    await waitFor(() => {
      expect(canvas.getByText('Login successfull')).toBeInTheDocument()
    })
  }
}

