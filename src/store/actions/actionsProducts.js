

export const requestChocosSuccessful = (data) => {
    return {
        type: "requestChocosSuccessful",
        payload: {
            chocos: data
        }
    }
}