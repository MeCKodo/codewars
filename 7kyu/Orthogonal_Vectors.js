/*
Suppose I have two vectors: (a1, a2, a3, ..., aN) and (b1, b2, b3, ..., bN). The dot product between these two vectors is defined as:

Dot Product = (a1)(b1) + (a2)(b2) + (a3)(b3) + ... + (aN)(bN)

The vectors are classified as orthogonal if the dot product equals zero.

Write a function called orthogonal? that accepts two arrays as inputs and returns true if the arrays are orthogonal and false if they are not orthogonal. The arrays will always be correctly formatted and of the same length, so there is no need to check them first.

For example:

orthogonal?([1, 1, 1], [2, 5, 7]) = false

orthogonal?([1, 0, 0, 1], [0, 1, 1, 0]) = true
 */

function isOrthogonal(u,v) {
    var dot = 0;
    for(var i = 0;i<u.length;i++) {
        dot += u[i] * v[i]
    }
    return dot === 0
}

function isOrthogonal_best(u, v) {
    return !u.reduce((s,n,i) => s + n * v[i], 0)
}
