import { writable } from "svelte/store";
import type { User } from "../interfaces/User";

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

//export const userStore = writable<User>({ uid: "ASD", displayName: "", photoURL: "" });