// @flow

import { FETCH_DATA_SUCCESS } from '../../constants/action-types';

export const fetchDataSuccess = (weatherInfo) => (
  {
    type: FETCH_DATA_SUCCESS,
    payload: { weatherInfo },
  }
);
