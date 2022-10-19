import React, { Children } from 'react'
import { Input, InputProps } from './Input'
import { Meta, StoryObj } from '@storybook/react'

export default {
    title: 'Input',
    component: Input,
    args: {
        placeholder: 'Placeholder',
        label: 'Label',
        children: 'Digite aqui: '
    } 
}as Meta<InputProps>
export const Default: StoryObj<InputProps> = {}