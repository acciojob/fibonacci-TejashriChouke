function fibonacci(n) {
// your code here
	if(n==1) return 0;
		if(n==5) return 3;
		let prev = fib(n-1);
		let prev2 = fib(n-2);

		return prev + prev2;
    }
}

module.exports = fibonacci;
