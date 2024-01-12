export const selectBalance = state => state.auth.user?.balance;
export const selectUser = state => state.auth.user;
export const selectIsLoading = state => state.auth.isLoading;
