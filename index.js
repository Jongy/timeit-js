"use strict";

function timeit(init = "", setup = "", stmt = "", iterations = 1e6) {
  const template = `
            const { performance } = require("perf_hooks");
            ${init};
            for (let i = 0; i < n; i++) {
              ${setup};
            }
            const start = performance.now();
            for (let i = 0; i < n; i++) {
                ${stmt};
            }
            return performance.now() - start;
    `;

  return new Function("n", template)(iterations);
}

module.exports = timeit;
