import { COLOR_NAME } from 'src/shared/constants/Colors';

export default {
  control: {
    backgroundColor: COLOR_NAME.GRAY_1,
    fontSize: 14,
    fontWeight: 'normal',
    color: COLOR_NAME.LIGHT_GRAY
  },

  '&multiLine': {
    control: {
      fontFamily: 'monospace',
      minHeight: 63
    },
    highlighter: {
      padding: 9,
      border: '1px solid transparent'
    },
    input: {
      padding: 9,
      border: '1px solid silver'
    }
  },

  '&singleLine': {
    display: 'inline-block',
    width: 180,

    highlighter: {
      padding: 1,
      border: '2px inset transparent'
    },
    input: {
      padding: 1,
      border: '2px inset'
    }
  }
};
