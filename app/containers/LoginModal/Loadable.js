/**
 *
 * Asynchronously loads the component for LoginModal
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
