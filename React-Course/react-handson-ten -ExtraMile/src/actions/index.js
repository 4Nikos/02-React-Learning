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

export const minusClick = () => ({
  type: 'MINUSCLICK'
});

export const plusClick = () => ({
  type: 'PLUSCLICK'
});

export const newValueClicks = (number) => ({
  type: 'NEWVALUECLICKS',
  number
});
export const resetClicks = () => ({
  type: 'RESETCLICKS'
})

