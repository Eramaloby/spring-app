import type { UserActions, UserState } from './user/user.types';

import type { ProductsActions, ProductsState } from './products/products.types';

export interface RootState {
  user: UserState;
  products: ProductsState;
}

export type AppActions = UserActions | ProductsActions;
