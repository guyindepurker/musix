import { httpService } from './http.service';

export const userService = {
  getById,
  remove,
  save,
  login,
  signup,
  logout,
  getMiniUser,
};

function getById(userId) {
  return httpService.get(`user/${userId}`);
}

function remove(userId) {
  return httpService.delete(`user/${userId}`);
}

function save(user) {
  const saveduser = user._id ? _update(user) : _add(user);
  return saveduser;
}

async function login(userCred) {
  const user = await httpService.post('auth/login', userCred);
  return _handleLogin(user);
}

async function signup(userCred) {
  const user = await httpService.post('auth/signup', userCred);
  return _handleLogin(user);
}

async function logout() {
  if (!_getUser()) return;
  await httpService.post('auth/logout');
  sessionStorage.clear();
}

async function _add(user) {
  return httpService.post(`user/`, user);
}

async function _update(user) {
  return httpService.put(`user/${user._id}`, user);
}

function _handleLogin(user) {
  sessionStorage.setItem('user', JSON.stringify(user));
  return user;
}

function getMiniUser() {
  const user = _getUser();
  const { _id, fullName, imgUrl } = user;
  return { _id, fullName, imgUrl };
}

function _getUser() {
  const user = JSON.parse(sessionStorage.getItem('user'));
  return user;
}
