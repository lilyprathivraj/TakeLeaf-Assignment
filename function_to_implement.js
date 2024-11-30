const num = "123123123123"
const num_list = num.split("")

function map(){
    console.log("From_map:")
    num_list.map(each => {
        console.log(each)
    })
}

function filter(){
    const filter_3_in_num = num_list.filter(each => each === "3")
    console.log("From_filter:",filter_3_in_num.join(''))
}

function reduce(){
    const total = num_list.reduce((total ,num) => {
        return total = total + parseInt(num);
      }, 0)
    console.log("From_reduce:",total)
    
}

function flatmap(){
    const add_5_to_eachitem = num_list.flatMap(each => parseInt(each)+5 )
    console.log("From_flatMap:",add_5_to_eachitem)
}

map()
flatmap()
reduce()
filter()