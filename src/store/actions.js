let api = 'https://api-js401.herokuapp.com/api/v1/teams';

export const getRemoteData = () => dispatch => {
  return fetch(api)
    .then(results => results.json())
    .then(records => {
      dispatch(getData(records));
    });
};

export const getData = payload => {
  return {
    type: 'GET',
    payload: payload,
  };
};

export const fakeAction = payload => {
  return {
    type: 'FAKE',
    payload: payload,
  };
};