export const requestChoco = () => {
  return { type: "requestChoco" };
};

export const requestChocosSuccessful = (data) => {
  return {
    type: "requestChocosSuccessful",
    payload: {
      choco: data,
    },
  };
};

export const requestChocosFailed = () => {
    return {
        type: "requestChocosFailed"
    }
}