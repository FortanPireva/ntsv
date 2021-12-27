export default {
  get: {
    tags: ["Todo CRUD operations"], // operation's tag.
    description: "Get notes", // operation's desc.
    operationId: "getNotes", // unique operation id
    parameters: [],
    // expected responses
    responses: {
      // response code
      200: {
        description: "Notes are obtained", // response desc.
        content: {
          // content-type
          "application/json": {
            schema: {
              $ref: "#/components/schemas/Note", // todo data model
            },
          },
        },
      },
      // response code
      404: {
        description: "Notes are not found", // response desc.
        content: {
          // content-type
          "application/json": {
            schema: {
              $ref: "#/components/schemas/Error", // error data model
            },
          },
        },
      },
    },
  },
};
