import createNote from "./create-note";
import getNote from "./get-note";
import getNotes from "./get-notes";

export default {
  paths: {
    "/notes/{id}": {
      ...getNote,
    },
    "/notes": {
      ...createNote,
      ...getNotes,
    },
  },
};
