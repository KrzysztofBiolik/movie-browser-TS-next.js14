

type fetchApiSearchParameters = {
    page?: string;
    query?: string | undefined;
    api_key: string,
}

export const buildQueryString = (parameters: fetchApiSearchParameters) => {

    const urlSearchParams = new URLSearchParams;

    for (const key in parameters) {
        const value = parameters[key as keyof typeof parameters];

        if (value === undefined) {
            urlSearchParams.delete(key);
        } else {
            urlSearchParams.set(key, value)
        }
    }
    return urlSearchParams.toString();
}