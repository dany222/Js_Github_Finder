class GitHub {
  constructor() {
    this.client_id = "dd6046b967219a201ac5";
    this.client_secret = "85c3ff9eb11b1b111fbc14acc55667d8a2908929";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${
        this.client_id
      }&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();

    return {
      profile
    };
  }
}
