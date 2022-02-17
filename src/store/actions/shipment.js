import * as actionTypes from './actionTypes';
import axios from 'axios';

const URL =
  'https://bitbucket.org/hpstore/spacex-cargo-planner/raw/204125d74487b1423bbf0453f4dcb53a2161353b/shipments.json';

export const fetchShipments = () => {
  return (dispatch) => {
    return axios.get(URL).then((res) => {
      dispatch({ type: actionTypes.SHIPMENTS_SET_LIST, value: res.data });
    });
  };
};

export const setCurrent = (id) => {
  return (dispatch) => {
    dispatch({ type: actionTypes.SHIPMENTS_SET_CURRENT, value: id });
  };
};
