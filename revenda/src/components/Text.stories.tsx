import React, { Children } from 'react'
import { Text, TextProps } from './Text'
import { Meta, StoryObj } from '@storybook/react'

export default {
    title: 'Text',
    component: Text,
    args: {
        children: 'Hello World',
        size: 'md' || 'sm' || 'lg',
        asChild: false
    },
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg'],
            control: { 
                type: 'inline-radio' 
            }
        }
    }
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {
    args: { size: 'md' },
}
export const Small: StoryObj<TextProps> = {
    args: { size: 'sm' },

}
export const Large: StoryObj<TextProps> = {
    args: { size: 'lg' },
}
export const Customin: StoryObj<TextProps> = {
    args: {
        asChild: false,
        children: (<div>Hello World</div>)
    },argTypes: {
        children: {
            table: {
                disable: true
            }
        }
    }

}