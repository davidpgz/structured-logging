export const randomDelay = (upperValue = 1000) => new Promise(_ => setTimeout(_, Math.random() * upperValue));