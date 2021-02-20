import { wrap } from "svelte-spa-router/wrap"
import { loggedIn$ } from "../../config/firebase"
import Home from "../../views/Home.svelte";
import NotFound from "../../views/NotFound.svelte";
import Profile from "../../views/Profile.svelte";
import RecipeForm from "../RecipeForm/RecipeForm.svelte";
import RecipeDetails from "../../views/RecipeDetails.svelte"
import Login from "../../views/Login.svelte"

loggedIn$.subscribe(user => {
  console.log("routes:",user.displayName);
});

const routes = {
  '/': Home,
  '/login': Login,
  '/user/:id': wrap({
    component: Profile,
  }),
  '/recipe/:id': RecipeDetails,
  '/create-recipe': RecipeForm,

  '*': NotFound
}

export default routes;