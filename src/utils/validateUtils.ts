export function validateDate(expirationDate: string) {
    const date = formatDate()
    const year = date.slice(-2)
    const month = date.slice(0, 2)

    const expirationYear = expirationDate.slice(-2)
    const expirationMonth = expirationDate.slice(0, 2)

    if (year > expirationYear || (year === expirationYear && month > expirationMonth)) {
        throw { type: 'user', message: 'card has expired', status: 406 };
    }
}

export function formatDate() {
    const date = new Date();

    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear() + 5

    return month + '/' + year.toString().slice(-2);
}