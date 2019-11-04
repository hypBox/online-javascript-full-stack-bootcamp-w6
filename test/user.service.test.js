const assert = require('assert');
const userService = require('../src/services/user.service');

const USERS_LENGTH = 10;
const USERNAME = 'Antonette';
const USER = {
  "id": 100,
  "name": "Amir Zad",
  "username": "AmirZad",
  "email": "amir.zad@hypbox.com",
};

const DELETE_USER = {
  "id": 101,
  "name": "Delete User",
  "username": "DeleteUser"
};


it('getUsers returns 10 users', done => {
  const users = userService.getUsers();
  assert.equal(USERS_LENGTH, users.length);
  done();
});

it('getUserById returns a user with username "Antonette" for id 2', done => {
  const findUser = userService.getUserById(2);
  assert.equal(findUser.username, USERNAME);
  done();
});

it('createUser adds a user to the users', done => {
  userService.createUser(USER);
  const findUser = userService.getUserById(100);
  assert.equal(findUser.username, USER.username);
  done();
});

it('updateUser updates username to "USERNAME" for the user id 100', done => {
  USER.username = 'USERNAME';
  userService.updateUser(100, USER);
  const findUser = userService.getUserById(100);
  assert.equal(findUser.username, USER.username);
  done();
});

it('deleteUser removes the user with id 100', done => {
  userService.createUser(DELETE_USER);
  const isDeleted = userService.deleteUser(DELETE_USER.id);
  const findUser = userService.getUserById(101);
  assert.equal(findUser === undefined, isDeleted);
  done();
});
