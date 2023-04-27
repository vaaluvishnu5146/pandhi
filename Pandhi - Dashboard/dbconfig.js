const mongoose = require("mongoose");

mongoose.connect(
  `mongodb+srv://vishnu:ehXxI3U2bCfmOaPo@cluster0.ez75xfb.mongodb.net/pandhi?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);
