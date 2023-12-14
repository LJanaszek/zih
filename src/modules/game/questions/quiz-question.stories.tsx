import type { Meta, StoryObj } from '@storybook/react';

import { QuizQuestionDummy } from './quiz-questions';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Layout/quiz',
  component: QuizQuestionDummy,
  tags: ['autodocs'],
} satisfies Meta<typeof QuizQuestionDummy>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Base: Story = {
  args: {
    question: {
        id:'1',
        text: 'cos',
        description:"",
        answers: [{
          id:'1',
            text:'o1'
        },{
          id:'2',
            text:'o2'
        },{
          id:'3',
            text:'03'
        },{
          id:'4',
            text:'o4'
        }]
    }
  },
  render: (args) => {
    return <QuizQuestionDummy {...args} />
  }
};


export const WithImg: Story = {
    args: {
      question: {
          id:'1',
          text: 'cos',
          imgSrc: 'http://placekitten.com/800/600',
          description:"",
          answers: [{
            id:'1',
              text:'o1'
          },{
            id:'2',
              text:'o2'
          },{
            id:'3',
              text:'03'
          },{
            id:'4',
              text:'o4'
          }]
      }
    },
    render: (args) => {
      return <QuizQuestionDummy {...args} />
    }
  };

  export const NoAnswers: Story = {
      args: {
        question: {
            id:'1',
            text: 'cos',
            imgSrc: 'http://placekitten.com/800/600',
            description:"",
            answers: []
        }
      },
      render: (args) => {
        return <QuizQuestionDummy {...args} />
      }
    };