/**
 *
 * Asynchronously loads the component for ProductAdd
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
