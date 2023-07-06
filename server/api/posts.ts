import { getXataClient } from "~/lib/xata.codegen";

export default defineEventHandler(async (event) => {
  const xata = getXataClient();
  const x = await xata.db.Posts.getAll();

  return x;
});
