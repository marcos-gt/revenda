import React, { Children } from 'react'
import { Button, ButtonProps } from './Button'
import { Meta, StoryObj } from '@storybook/react'

export default {
    title: 'Button',
    component: Button,
    args: {
        children: 'Button',
    } 
}as Meta<ButtonProps>
export const Default: StoryObj<ButtonProps> = {}
