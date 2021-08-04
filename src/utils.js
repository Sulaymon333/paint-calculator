const currencyFormatter = (value, currency = 'EUR', locale = 'fi-FI') => {
    const formattedValue = new Intl.NumberFormat(locale, { currency: currency, style: 'currency' }).format(
        value.toFixed(2)
    );
    return formattedValue;
};

export { currencyFormatter };
