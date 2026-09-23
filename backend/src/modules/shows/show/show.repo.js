// show.repository.js

import { Show } from "./show.model.js";

export const create = async (payload, session = null) => {
  const [show] = await Show.create(
    [payload],
    session ? { session } : undefined
  );

  return show;
};