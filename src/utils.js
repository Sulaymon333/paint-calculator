const currencyFormatter = (locale = 'fi-FI', value, currency = 'EUR') => {
    const formattedValue = new Intl.NumberFormat(locale, { currency: currency, style: 'currency' }).format(
        value.toFixed(2)
    );
    return formattedValue;
};

export { currencyFormatter };
