import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import contactReducer from '../features/contact/contactSlice';
import navigationReducer from '../features/navigation/nav';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    contact: contactReducer,
    menu: navigationReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
