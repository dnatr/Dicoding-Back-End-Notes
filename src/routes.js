const { addNoteHandler, getAllNotesHandler } = require("./handler");

const routes = [
  {
    method: "POST",
    path: "/books",
    handler: addNoteHandler,
    options: {
      cors: {
        origin: ["*"],
      },
    },
  },
  {
    method: "GET",
    path: "/books",
    handler: getAllNotesHandler,
  },
];

module.exports = routes;
