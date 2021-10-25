## timeit-js
Clones CPython's [timeit](https://docs.python.org/3/library/timeit.html) module, for JavaScript.

This is inteded to be an easy interface to run microbenchmarks.

For example - demonstrate `Object` vs `Map` access times (Node v14.4.0):
```js
> timeit("d['a']", null, "d = new Map(); d['a'] = 5")
3.5180317138671874e-10
> timeit("d['a']", null, "d = {'a': 5}")
4.951427128906249e-10
```

TODOs:
* Clean environment & side effects, like GC, JIT stuff, etc. For example, the result displayed above reproduces  on a clean process, but not a process with "worn-out" heap.
