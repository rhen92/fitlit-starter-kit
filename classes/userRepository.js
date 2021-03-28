class UserRepository {
  constructor(data) {
    this.users = data;
  }
}

if(typeof module !== 'undefined') {
  module.exports = UserRepository;
}
