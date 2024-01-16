export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";
export const GET_JOBS = "GET_JOBS";

export const addToFavouriteAction = (company_name) => {
    return {
        type: ADD_TO_FAVOURITE,
        payload: company_name
    }
}

export const removeFromFavouriteAction = (company_name) => {
    return {
        type: REMOVE_FROM_FAVOURITE,
        payload: company_name
    }
}

export const getJobsAction = () => {
    return async dispatch => {
        fetch('https://strive-benchmark.herokuapp.com/api/jobs?search=')
            .then(res => {
                if (!res.ok) {
                    throw new Error ('Network connection was not ok');
                }
                return res.json();
            })
            .then(jobs => {
                dispatch({
                    type: GET_JOBS,
                    payload: jobs
                })
            })
            .catch(err => {
                console.error('Errore', err);
            });
    };
};