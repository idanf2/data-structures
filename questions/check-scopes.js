// let a = function () {
//     this.b = function () {
//         console.log(this.test);
//     }

//     console.log(this.test);
// }

// test = 'global';
// console.log(this.test);
// a();
// console.log(this.test);
// let b = new a();
// b.b();


function a() {
    this.bla = 'inner';
    this.test = () => {
        return () => {
            console.log(this.bla);
        }
    }

    this.test2 = function () {
        return function () {
            console.log(this.bla);
        }
    }
    console.log(this.bla);
}

this.bla = 'outer';
console.log(this.bla);
let c = new a();
c.test()();
c.test2()();