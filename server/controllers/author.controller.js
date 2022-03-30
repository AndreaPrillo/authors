const Author = require("../models/author.model");

module.exports.findAllAuthores = (req, res) => {
    Author.find()
    .then((allAuthors) => {
        res.json(allAuthors);
    })
    .catch((err) => {
        res.json({ message: "Something went wrong", error: err });
    });
};

module.exports.createAuthor = (request, response) => {
    Author.create(request.body)
    .then((author) => response.json(author))
    .catch((err) => {
        console.log(err);
        response.status(400).json(err)});
};

module.exports.findOneAuthor = (req, res) => {
    Author.findOne({ _id: req.params.id })
    .then((OneAuthor) => {
        res.json(OneAuthor);
    })
    .catch((err) => {
        res.json({ message: "Something went wrong", error: err });
    });
};


module.exports.update_Author= (req, res) => {
    Author.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true
    })
    .then((updatedAuthor) => {
        res.json( updatedAuthor );
    })
    .catch((err) => {
        res.status(400).json(err);
    });
};

module.exports.deleteAnExistingAuthor = (req, res) => {
    Author.deleteOne({ _id: req.params.id })
    .then((result) => {
        res.json( result );
    })
    .catch((err) => {
        res.json({ message: "Something went wrong", error: err });
    });
};
