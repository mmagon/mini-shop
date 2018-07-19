import API from './API';

class Auth extends API {
  constructor(token) {
    super(token);
    this.login = this.login.bind(this);
    this.signup = this.signup.bind(this);
    this.loadUserData = this.loadUserData.bind(this);
  }

  /**
   * Attempt Login
   * @param Object
   * @return Promise
   */
  login(params) {
    return super.post('/user/login', params);
  }

  /**
   * Attempt signup
   * @param Object
   * @return Promise
   */
  signup(params) {
    return super.post('/user/signup', params);
  }

  /**
   * Get current user data
   * @param token
   * @return Promise
   */
  loadUserData() {
    return super.get('/user/profile');
  }
}
export default Auth;
