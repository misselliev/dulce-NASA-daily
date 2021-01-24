export const LOAD_DAY = 'LOAD_DAY';
export const ERROR_LOAD = 'ERROR_LOAD';

export interface Day {
    copyright: string;
    date: string;
    explanation: string;
    url: string;
    title: string;
}

export interface Error {
    error: string;
}

export interface LoadDayAction {
    type: typeof LOAD_DAY;
    payload: Day;
}

export interface ErrorLoadAction {
    type: typeof ERROR_LOAD;
    payload: Error;
}
