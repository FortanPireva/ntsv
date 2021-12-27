export default {
  post: {
    tags: ["Note post operation"], // operation's tag.
    description: "Create a note", // operation's desc.
    operationId: "postNote", // unique operation id
    parameters: [],
    requestBody: {
      // expected request body
      content: {
        // content-type
        "application/json": {
          schema: {
            $ref: "#/components/schemas/Note", // todo input data model
          },
        },
      },
    },
    // expected responses
    responses: {
      // response code
      201: {
        description: "Note is created", // response desc.
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
      500: {
        description: "Note  is not created", // response desc.
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
