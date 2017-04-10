const loggingMiddleware = store => next => action => {
    console.log(action)
    next(action)
}

export default loggingMiddleware