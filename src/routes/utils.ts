

export function shuffle<T>(array: T[]) {
    let i = array.length;

    while (i--) {
        const j = Math.floor(Math.random() * i + 1)
        const tmp = array[i];

        array[i] = array[j]
        array[j] = tmp;
    }

    return array;
}
