export const sortedTransactions = array =>
  array.slice().sort((a, b) => {
    const dateA = new Date(a.transactionDate);
    const dateB = new Date(b.transactionDate);
    return dateB - dateA;
  });
