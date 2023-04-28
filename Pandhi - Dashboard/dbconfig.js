const mongoose = require("mongoose");

mongoose.connect(
  `mongodb+srv://test1:t1CR7FJxrWG6kZBU@cluster0.ez75xfb.mongodb.net/pandhi?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);
