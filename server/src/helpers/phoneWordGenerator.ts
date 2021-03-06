

const keypadMap = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z'],
};



export function phoneWordGenerator(inputNumbers: string): string[] {
    const safeInputNumbers = inputNumbers.replace(/[^2-9]/g, '');

    if (safeInputNumbers.length === 0) {
        throw new Error('Input numbers needed, eg. 123');
    }

    // Too big, cca 3^9 = 19683
    if (safeInputNumbers.length > 9) {
        throw new Error('Too many input numbers, please use 9 or less.');
    }

    const inputNumbersArray = safeInputNumbers.split('');
    const maxDepth = safeInputNumbers.length;

    const output = [];
    const stack = [];
    stack.push('');

    while (true) {
        const prefix = stack.pop();
        if (prefix === undefined) {
            break;
        }

        const depth = prefix.length;
        const nextInputNumber = inputNumbersArray[depth];
        const nextLetters = keypadMap[nextInputNumber];
        nextLetters.forEach((nextLetter) => {
            const nextPrefix = prefix + nextLetter;
            const nextPrefixDepth = nextPrefix.length;

            if (nextPrefixDepth === maxDepth) {
                output.push(nextPrefix);
            }
            else {
                stack.push(nextPrefix);
            }
        });
    }

    return output;
}