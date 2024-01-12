export function getFormattedDate(startDate) {
    const year = startDate.getFullYear();
    const month = String(startDate.getMonth() + 1).padStart(2, '0');
    const day = String(startDate.getDate()).padStart(2, '0');
    const hours = String(startDate.getHours()).padStart(2, '0');
    const minutes = String(startDate.getMinutes()).padStart(2, '0');
    const seconds = String(startDate.getSeconds()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
    return formattedDate;
}

export function negOrPosNumber(sum, isExpense) {
    if (isExpense) {
        return `-${sum}`;
    }
    return sum;
}

export function checkTransactionType(isExpense) {
    if (isExpense) {
        return 'EXPENSE';
    }
    return 'INCOME';
}