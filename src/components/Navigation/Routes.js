import Home from "../../views/Home.svelte";
import NotFound from "../../views/NotFound.svelte";

const routes = {
  '/': Home,
  '*': NotFound
}

export default routes;