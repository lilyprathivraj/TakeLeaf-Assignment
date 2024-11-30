// var can store the values globally
// let stores within certain block only
// const values cannot reassign


const add_number = () => {
    console.log("Addition of var values:", num1+num2);

    //using let
    let num4 = 5
    let num5 = 6
    console.log("Product of let values:", num4*num5)

    //using const
    const num7 = 10
    const num8 = 7
    console.log("Subtraction of const values:", num7-num8)
}

//using var
var num1 = 1
var num2 = 2
add_number()

