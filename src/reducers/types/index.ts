export type ID = number | string

/**
 * ReduxEntity type
 * E stands for entity type
 */
export type ReduxEntity<E> = {
    data: {} | E
    isLoading: boolean
    isLoaded: boolean
    error: string | Error
    updated: Date
}

/**
 * ReduxList type
 * E stands for entity type
 */
export type ReduxList<E> = {
    data: Array<E>
    isLoading: boolean
    isLoaded: boolean
    error: string | Error
    updated: Date
}