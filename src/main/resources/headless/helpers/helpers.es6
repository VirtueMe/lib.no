export const buildParentPathQuery = (parentPath) => `_parentPath = '/content${parentPath}'`

// If arg is falsy, returns an empty array.
export const forceArray = maybeArray => maybeArray ? [].concat(maybeArray) : []
