import * as userAPI from "./users-api";


export async function createUser(userData) {
    try {
      const data = await userAPI.create(userData);
      return data;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
  