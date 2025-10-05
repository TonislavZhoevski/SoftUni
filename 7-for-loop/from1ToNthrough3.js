function from1ToNthrough3 (n) {
    n = Number(n);

    for (let i = 1; i <= n; i += 3) {
        console.log(i);
    }
}
from1ToNthrough3(10);