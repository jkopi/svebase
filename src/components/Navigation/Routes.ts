import { wrap } from "svelte-spa-router/wrap"
import Home from "../../views/Home.svelte";
import NotFound from "../../views/NotFound.svelte";
import RecipeForm from "../RecipeForm/RecipeForm.svelte";
import RecipeDetails from "../../views/RecipeDetails.svelte"
import Login from "../../views/Login.svelte"

// TODO: implement auth guards based on current user..
const routes = {
  '/': Home,
  '/login': wrap({
    component: Login
  }),
  '/recipe/:name': RecipeDetails,
  '/create-recipe': wrap({
    component: RecipeForm,
  }),

  '*': NotFound
}

export default routes;