import type { User } from "../../interfaces/User";
import { wrap } from "svelte-spa-router/wrap"
import { auth, loggedIn$ } from "../../config/firebase"
import Home from "../../views/Home.svelte";
import NotFound from "../../views/NotFound.svelte";
import Profile from "../../views/Profile.svelte";
import RecipeForm from "../RecipeForm/RecipeForm.svelte";
import RecipeDetails from "../../views/RecipeDetails.svelte"

loggedIn$.subscribe(user => {
  console.log(user.displayName);

});


const routes = {
  '/': Home,
  '/user/:id': wrap({
    component: Profile,
  }),
  '/recipe/:id': RecipeDetails,
  '/create-recipe': RecipeForm,

  '*': NotFound
}

export default routes;