import { fromJS } from 'immutable';
import productAddReducer from '../reducer';

describe('productAddReducer', () => {
  it('returns the initial state', () => {
    expect(productAddReducer(undefined, {})).toEqual(fromJS({}));
  });
});
