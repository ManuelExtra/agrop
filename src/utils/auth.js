import Cookie from 'js-cookie';
// ----------------------------------------------------------------------

/**
 * signin a user
 * @param {*} data
 * @param {*} token
 */
export async function sign(data, token) {
  localStorage.setItem('_user', JSON.stringify(data));
  Cookie.set('_tk', token);
}

/**
 * remove a user
 */
export function remove() {
  localStorage.removeItem('_user');
  Cookie.remove('_tk');
}

/**
 * view data
 * @returns
 */
export function view() {
  return {
    user: JSON.parse(localStorage.getItem('_user')),
    _token: Cookie.get('_tk'),
  };
}

/**
 * authorize user
 * @returns
 */
export function verify() {
  if (localStorage._user !== undefined && Cookie.get('_tk') !== undefined) {
    return true;
  }
  return false;
}
