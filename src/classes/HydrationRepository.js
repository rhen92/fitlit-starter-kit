class HydrationRepository {
  constructor(data) {
    this.usersHydration = data;
  }
}

if(typeof module !== 'undefined') {
  module.exports = HydrationRepository;
}
