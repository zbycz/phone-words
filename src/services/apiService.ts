export interface IPhoneWordsResult {
    list: string[];
}

function getPhoneWords(inputNumbers: string): Promise<IPhoneWordsResult> {
    return fetch(`/api/phone-words/${inputNumbers}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Invalid input, please use numbers 2-9');
            }
            return response.json();

        }, (err) => {
            throw new Error('API seems down, please, try again later.');
        });
}

export const apiService = {
    getPhoneWords
};
