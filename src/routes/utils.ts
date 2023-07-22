

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

export function get_twemoji_url(emoji: string) {
    const code = [...emoji].map((char: any) => char.codePointAt(0)!.toString(16)).join('-');
    return `/twemoji/assets/svg/${code}.svg`;
}
