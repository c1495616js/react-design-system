import React from 'react';
import { Story, Meta } from '@storybook/react';
import { SearchIcon } from '../Icon/src';
import Icon from '../Icon/Icon';
import Button, { ButtonProps } from './Button';
import { Sizes as sizeOptions } from '../../system/typings';

export default {
  title: 'General/Button',
} as Meta;

const buttonColors = ['primary', 'secondary', 'error', 'disabled'];

const variants = ['contained', 'outlined', 'text'];

export const Playground: Story<ButtonProps> = (props) => <Button {...props} />;

Playground.args = {
  children: 'Playground',
  error: false,
  disabled: false,
  loading: false,
};

Playground.argTypes = {
  children: {
    description: 'Button text',
    type: { name: 'string', required: true },
    control: 'text',
  },
  color: {
    description: 'Button text color',
    type: 'string',
    table: {
      type: {
        summary: buttonColors.map((c) => c),
        defaultValue: {
          summary: 'primary',
        },
      },
    },
    control: {
      type: 'select',
      options: buttonColors,
    },
  },
  error: {
    description: 'Error Status',
    type: 'boolean',
    control: 'boolean',
  },
  disabled: {
    description: 'Disabled Status',
    type: 'boolean',
    control: 'boolean',
  },
  loading: {
    description: 'loading status, default prefix',
    type: 'boolean',
    control: 'boolean',
  },
  prefix: {
    description: 'prefix render icon from Icon/src',
    table: {
      type: {
        summary: 'IconDefinition',
      },
    },
  },
  size: {
    description: 'Button size',
    type: 'string',
    table: {
      type: {
        summary: sizeOptions.map((a) => a),
      },
    },
    options: sizeOptions,
    control: 'select',
  },
  suffix: {
    description: 'suffix render icon from Icon/src',
    table: {
      type: {
        summary: 'IconDefinition',
      },
    },
  },
  variant: {
    description: 'Button variant',
    type: 'string',
    table: {
      type: {
        summary: variants.map((a) => a),
      },
    },
    options: variants,
    control: 'select',
  },
};

export const Variants = () => (
  <div
    style={{
      display: 'inline-grid',
      gridTemplateColumns: 'repeat(4, min-content)',
      gap: '16px',
    }}
  >
    <Button variant="contained">primary</Button>
    <Button variant="contained" color="secondary">
      secondary
    </Button>
    <Button variant="contained" error>
      error
    </Button>
    <Button variant="contained" disabled>
      disabled
    </Button>
    <Button variant="outlined">primary</Button>
    <Button variant="outlined" color="secondary">
      secondary
    </Button>
    <Button variant="outlined" error>
      error
    </Button>
    <Button variant="outlined" disabled>
      disabled
    </Button>
    <Button>primary</Button>
    <Button color="secondary">secondary</Button>
    <Button error>error</Button>
    <Button disabled>disabled</Button>
  </div>
);

export const Sizes = () => (
  <div
    style={{
      display: 'inline-grid',
      gridTemplateColumns: 'repeat(3, min-content)',
      gap: '16px',
      alignItems: 'center',
    }}
  >
    <Button size="small">ok</Button>
    <Button>ok</Button>
    <Button size="large">ok</Button>
    <Button variant="outlined" size="small">
      ok
    </Button>
    <Button variant="outlined">ok</Button>
    <Button variant="outlined" size="large">
      ok
    </Button>
    <Button variant="contained" size="small">
      ok
    </Button>
    <Button variant="contained">ok</Button>
    <Button variant="contained" size="large">
      ok
    </Button>
  </div>
);

export const WithIcons = () => (
  <div
    style={{
      display: 'inline-grid',
      gridTemplateColumns: 'repeat(4, min-content)',
      gap: '16px',
      alignItems: 'center',
    }}
  >
    <Button
      suffix={<Icon icon={SearchIcon} />}
      size="small"
      variant="contained"
    >
      search
    </Button>
    <Button suffix={<Icon icon={SearchIcon} />} variant="contained">
      search
    </Button>
    <Button suffix={<Icon icon={SearchIcon} />} disabled variant="contained">
      search
    </Button>
    <Button
      suffix={<Icon icon={SearchIcon} />}
      size="large"
      variant="contained"
    >
      search
    </Button>
  </div>
);

interface LoadingStoryArgs {
  loading: boolean;
}

export const Loading: Story<LoadingStoryArgs> = ({ loading }) => (
  <Button loading={loading} variant="contained">
    ok
  </Button>
);

Loading.args = {
  loading: true,
};
