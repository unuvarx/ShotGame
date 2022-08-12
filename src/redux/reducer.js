const INITIAL_STATE = {
  task: [
    {
      taskName: '50 Saniye amuda kalkıp bekle ya da 1 shot.',
      id: 1,
    },
    {
      taskName: 'Eski sevgilini ara ya da 2 shot.',
      id: 2,
    },
    {
      taskName: 'İnstagrama 2 adet post at ya da 1 shot.',
      id: 3,
    },
    {
      taskName: 'Sen bu el dinlen!',
      id: 5,
    },
    {
      taskName: 'İstediğin birine 2 shot attır.',
      id: 6,
    },
  ],
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_TASK':
      return {...state, task: action.payload};
    default:
      return state;
  }
};
