export default {
  components: {
    schemas: {
      id: {
        type: "string",
        description: "An id of a resource",
        example: "xcxvf",
      },
      Note: {
        type: "object",
        properties: {
          id: {
            type: "string", // data-type
            description: "Todo identification number", // desc
            example: "ytyVgh", // example of an id
          },
          title: {
            type: "string", // data-type
            description: "Todo's title", // desc
            example: "Coding in JavaScript", // example of a title
          },
          completed: {
            type: "boolean", // data type
            description: "The status of the note", // desc
            example: false, // example of a completed value
          },
        },
      },
      Error: {
        type: "object", //data type
        properties: {
          message: {
            type: "string", // data type
            description: "Error message", // desc
            example: "Not found", // example of an error message
          },
          internal_code: {
            type: "string", // data type
            description: "Error internal code", // desc
            example: "Invalid parameters", // example of an error internal code
          },
        },
      },
    },
  },
};
