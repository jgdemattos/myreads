import App from "../App";
import SearchPage from "../components/SearchPage";

var indexRoutes = [
  { path: "/search", name: "SearchPage", component: SearchPage },
  { path: "/", name: "Components", component: App }
];

export default indexRoutes;
