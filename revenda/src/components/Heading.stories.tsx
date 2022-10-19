import React, { Children } from 'react'
import { Heading, HeadingProps } from './Heading'
import { Meta, StoryObj } from '@storybook/react'

export default {
    title: 'Heading',
    component: Heading,
    args: {
        children: 'Hello World',
        size: 'lg' || 'xl' || '2xl',
        asChild: false
    },
    argTypes: {
        size: {
            options: ['lg', 'xl', '2xl'],
            control: { 
                type: 'inline-radio' 
            }
        }
    }
} as Meta<HeadingProps>

export const Default: StoryObj<HeadingProps> = {
    args: { size: 'xl' },
}
export const Small: StoryObj<HeadingProps> = {
    args: { size: 'lg' },

}
export const Large: StoryObj<HeadingProps> = {
    args: { size: '2xl' },
}
export const Customin: StoryObj<HeadingProps> = {
    args: {
        asChild: false,
        children: (
        <h1>Tag H1</h1>
        )
    },argTypes: {
        children: {
            table: {
                disable: true
            }
        }
    }

}