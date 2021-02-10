import Home from "../../views/Home.svelte";
import NotFound from "../../views/NotFound.svelte";
import Profile from "../../views/Profile.svelte";


const routes = {
  '/': Home,
  '/user/:id': Profile,

  '*': NotFound
}

export default routes;