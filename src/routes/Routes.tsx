import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { Root, Home, Archive, NotFound } from "../pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} >
      <Route index element={<Home />} />
      <Route path="archive" element={<Archive />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default router;