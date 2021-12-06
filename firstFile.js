
function sum1() {
    //code
    this // this din functie

}

const some = () => {
    // this asta e din afara functie
    this
}

const sum = () => {

    return () => {
        a+b
        // this asta e din afara functiilor
        this
    }
}

const plus = () => () => {
    a+b
    //
    this
}



class Auto {
    constructor() {
    }

    addVim = () => {
        this.name = 'xxx'
    }


}
