import getNote from "./get-note";

export default {
  paths: {
    "/notes/{id}": {
      ...getNote,
    },
  },
};
