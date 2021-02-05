import { writable } from "svelte/store";

export const recipes = writable([]);
export const timeout = writable(false);