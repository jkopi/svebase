import { writable } from "svelte/store";
import type { User } from "../interfaces/User";

// not used
function userStore() {
  let user: User | null;
  const { subscribe, set, update } = writable<User>(user);
  return {
    subscribe,
    setUser: (value: User) => {
      set(value)
    },
    currentUser: () => { return user }
  }
}

export const user = userStore();