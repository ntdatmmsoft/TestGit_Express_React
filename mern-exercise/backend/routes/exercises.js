const router = require('express').Router();
let Exercise = require('../models/exercise.model');

router.route('/').get((req, res) => {
  Exercise.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/').post((req, res) => {
  const username = (req.body.username !== undefined) ? req.body.username : "";
  const description = (req.body.description !== undefined) ? req.body.description : "";
  const duration = Number((req.body.duration !== undefined) ? req.body.duration : 0);
  const date = Date.parse((req.body.date !== undefined) ? req.body.date : Date());

  const newExercise = new Exercise({
    username,
    description,
    duration,
    date,
  });

  newExercise.save()
    .then(() => res.json('Exercise added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Exercise.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json('Exercise deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Exercise.findById(req.params.id)
    .then(exercise => {
      exercise.username = (req.body.username !== undefined) ? req.body.username : exercise.username;
      exercise.description = (req.body.description !== undefined) ? req.body.description : exercise.description;
      exercise.duration = Number((req.body.duration !== undefined) ? req.body.duration : exercise.duration);
      exercise.date = Date.parse((req.body.date !== undefined) ? req.body.date : exercise.date);

      exercise.save()
        .then(() => res.json('Exercise updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;