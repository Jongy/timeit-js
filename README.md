## timeit-js
Clones CPython's [timeit](https://docs.python.org/3/library/timeit.html) module, for JavaScript.

This is inteded to be an easy interface to run microbenchmarks.

For example - demonstrate `Object` vs `Map` access / write times (Node v16.4.2):
```js
> timeit("d = new Map()", "d.set(i, ((10**30)*Math.random()).toString(36))", "v = i%20; if (!d.get(v)) d.set(v, 1)")
15.940445065498352
> timeit("d = {}", "d[i] = ((10**30)*Math.random()).toString(36)", "v = i%20; if (!d[v]) d[v] = 1")
5.347158074378967
```

TODOs:
* Clean environment & side effects, like GC, JIT stuff, etc. For example, the result displayed above reproduces  on a clean process, but not a process with "worn-out" heap.
