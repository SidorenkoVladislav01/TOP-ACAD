function recursia(divisible, divider = 1) {
    if (divisible <= 1) {
    
    console.log("Число  должно быть быльше 1")
    return
    }

    if (divisible % divider == 0 && divider != 1 && divisible != divider) {
        console.log("Число не простое")
        return
    }

    if (divider === divisible) {
        console.log("Число простое")
        return
    }

 recursia(divisible, divider + 1)

}

recursia(4)