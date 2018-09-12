export interface IPhoneWordsResult {
    list: string[];
}

function getPhoneWords(inputNumbers: string): Promise<IPhoneWordsResult> {
    return fetch(`/api/phone-words/${inputNumbers}`)
        .then((response) => {
            if (!response.ok) {
                // TODO resolve error promise and use server message instead
                throw new Error('Invalid input, please use numbers 2-9, at most 9 characters.');
            }
            return response.json();

        }, (err) => {
            throw new Error('API seems down, please, try again later.');
        });
}

export const apiService = {
    getPhoneWords
};
