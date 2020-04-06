const sum = (a, b) => a + b
const subtract = (a, b) => a - b

test('Sum adds numbers', () => {
    const result = sum(3,7)
    const expected = 10
    expect(result).toBe(expected)
})

test('Subtract subtracts numbers', () => {
    const result = subtract(7,2)
    const expected = 5
    expect(result).toBe(expected)
})


function test(title, callback) {
    try {
    callback()
    console.log(`PASSED ${title}`)    
    } catch (error) {
    console.error(`FAILED ${title}`)    
    console.error(error)    
    }
}

function expect(actual) {
    return {
        toBe(expected) {
            if (actual !== expected) {
                throw new Error(`${actual} is not equal to ${expected}`) 
            }
        },
        toBeGreaterThan(expected) {
            if (actual < expected) {
                throw new Error(`${actual} is not greater than ${expected}`) 
            }    
        }
    }
}