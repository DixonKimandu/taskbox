
import Task from './Task';
import { fn } from '@storybook/test';
const ActionsData = {
    onArchiveTask: fn(),
    onPinTask: fn(),
};

export default {
  component: Task,
  title: 'Task',
  tags: ['autodocs'],
  excludeStories: /.*Data$/,
  args: {
    ...ActionsData,
  }
};

export const Default = {
    args: {
        task: {
            id: '1',
            title: 'Test',
            state: 'TASK_INBOX',
        },
    },
};

export const Pinned = {
    args: {
        task: {
            ...Default.args.task,
            state: 'TASK_PINNED',
        },
    },
};

export const Archived = {
    args: {
        task: {
            ...Default.args.task,
            state: 'TASK_ARCHIVED',
        },
    },
};



