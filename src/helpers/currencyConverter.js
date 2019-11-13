export const convert = (price, currency) => {
    const coefficients = {
        dollar: 1.1,
        ruble: 70.28,
        pound: 0.86,
        frank: 1.1
    };

    return coefficients[currency] ?
        Math.round(price * coefficients[currency]) :
        price;
};