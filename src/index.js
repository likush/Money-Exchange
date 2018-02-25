// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let result = {};
    let h = 50;
    let q = 25;
    let d = 10;
    let n = 5;
    let p = 1;

    while (currency && !result.error && currency > 0) {
        count()
    }
    console.log('1')

    function count() {
        if (currency < 0) {
            return result
        } else if (currency >= 10000) {
            result.error = "You are rich, my friend! We don't have so much coins for exchange";
        } else if (currency >= h) {
            result['H'] = Math.floor(currency / h);
            currency %= h
        } else if (currency >= q) {
            result['Q'] = Math.floor(currency / q);
            currency %= q
        } else if (currency >= d) {
            result['D'] = Math.floor(currency / d);
            currency %= d
        } else if (currency >= n) {
            result['N'] = Math.floor(currency / n);
            currency %= n;
        } else if (currency >= p) {
            result['P'] = Math.floor(currency / p);
            currency %= p
        }
    }

    return result
}

