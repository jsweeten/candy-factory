const buyChocolate = () => {
    const candyObj = {type: "Milk chocolate"}
    return candyObj
}

let candy = buyChocolate()

const addFlavoring = (candy) => {
    const candyObj = candy.flavor = "Mint"
    return candyObj
}

const makeBarkMixture = (candy) => {
    if (candy.flavor === "Mint") {
        const candyObj = candy.mixed = true
        return candyObj
    } else {
        const candyObj = candy.mixed = false
        return candyObj
    }
}

const bakeCandy = (candy) => {
    if (candy.mixed === true) {
        const candyObj = candy.baked = true
        return candyObj
    } else {
        const candyObj = candy.baked = false
        return candyObj
    }
}

const breakBark = (candy) => {
    if (candy.baked === true) {
        const finishedCandy = [
            "Mint Chocolate Bark Piece",
            "Mint Chocolate Bark Piece",
            "Mint Chocolate Bark Piece",
            "Mint Chocolate Bark Piece",
            "Mint Chocolate Bark Piece",
            "Mint Chocolate Bark Piece",
        ]
        console.log(finishedCandy)
    }
}

const finishedCandy = (candy) => {
    const candyObj = ""
    return candyObj
}

addFlavoring(buyChocolate())
makeBarkMixture(addFlavoring(candy))
bakeCandy(makeBarkMixture(candy))
breakBark(bakeCandy(candy))
finishedCandy(breakBark(candy))

console.log(candy)