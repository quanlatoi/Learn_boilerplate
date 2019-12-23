/**
 *
 * Asynchronously loads the component for Y
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
