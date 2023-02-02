import assert from "assert";

function endZeros(a: number): number {
    

  if(a===0){
    return 1;
  }


  let count = 0;
  while (a % 10 === 0 && a !== 0) {
    count++;
    a = a / 10;
  }
  return count;
}


console.log(endZeros(10));

// These "asserts" are used for self-checking
assert.strictEqual(endZeros(1), 0);
assert.strictEqual(endZeros(0), 1);
assert.strictEqual(endZeros(10), 1);
assert.strictEqual(endZeros(100), 2);
assert.strictEqual(endZeros(1000), 3);