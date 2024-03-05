// // var foo = 1

// function a() {
//   var foo = 2
//   b()
// }

// function b() {
//   console.log(foo)
// }

// a()

const a = 5;

function foo() {
  function bar() {
    console.log(a)
  }
  bar();
}

foo()