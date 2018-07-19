import { fromJS } from 'immutable';
import signupModalReducer from '../reducer';

describe('signupModalReducer', () => {
  it('returns the initial state', () => {
    expect(signupModalReducer(undefined, {})).toEqual(fromJS({}));
  });
});
