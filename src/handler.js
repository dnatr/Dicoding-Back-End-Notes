const { nanoid } = require("nanoid");
const notes = require("./notes");

const addNoteHandler = (request, h) => {
  const {
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
  } = request.payload;

  const id = nanoid(16);
  const finished = pageCount === readPage;
  const insertedAt = new Date().toISOString();
  const updatedAt = createdAt;

  const newNote = {
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
    id,
    finished,
    insertedAt,
    updatedAt,
  };

  notes.push(newNote);

  const isSuccess = notes.filter((note) => note.id === id).length > 0;

  if (isSuccess) {
    const response = h.response({
      status: "success",
      message: "Buku berhasil ditambahkan",
      data: {
        noteId: id,
      },
    });

    response.header(
      "Access-Control-Allow-Origin",
      "http://notesapp-v1.dicodingacademy.com"
    );
    response.code(201);
    return response;
  }
  const response = h.response({
    status: "fail",
    message:
      "Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount",
  });
  response.code(400);

  return response;
};

const getAllNotesHandler = () => ({
  status: "success",
  data: {
    books: [
      {
        id: "Qbax5Oy7L8WKf74l",
        name: "Buku A",
        publisher: "Dicoding Indonesia",
      },
      {
        id: "1L7ZtDUFeGs7VlEt",
        name: "Buku B",
        publisher: "Dicoding Indonesia",
      },
      {
        id: "K8DZbfI-t3LrY7lD",
        name: "Buku C",
        publisher: "Dicoding Indonesia",
      },
    ],
  },
});
response.code(200);

module.exports = { addNoteHandler, getAllNotesHandler };
