'use strict';
module.exports = timeit;

const DEFAULT_ITERATIONS = 1e6;
const MIN_ELAPSED = 0.5;

function timeit(stmt, iters = null, setup = "") {
    let iters_unset = false;
    if (iters === null) {
        iters = DEFAULT_ITERATIONS;
        iters_unset = true;
    }
    iters /= 2;

    const template = `
            ${setup};
            const t0 = process.hrtime();
            for (let _i = 0; _i < _iters; _i++) {
                ${stmt};
            }
            const res = process.hrtime(t0);
            return res[0] + res[1] / 1e9
    `;

    let elapsed = 0;
    do {
        iters *= 2;
        elapsed = new Function("_iters", template)(iters);
    } while (iters_unset && elapsed < MIN_ELAPSED);

    return elapsed / iters;
}
