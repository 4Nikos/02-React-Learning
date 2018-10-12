export const increment = () => ({
  type: 'INCREMENT'
});

export const decrement = () => ({
  type: 'DECREMENT'
});

export const reset = () => ({
  type: 'RESET'
});

export const newValue = (number) => ({
  type: 'NEWVALUE',
  number
});

