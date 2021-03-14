
const router = require('express').Router();
let Member = require('../models/member.model');

// get member collection
router.route('/').get((req, res) => {
  Member.find()
    .then(member => res.json(member))
    .catch(err => res.status(400).json('Error: ' + err));
});

// add an member
router.route('/add').post((req, res) => {
  const membername = req.body.membername;

  const newMember = new Member({
    membername,
  });

  newMember.save()
  .then(() => res.json('Member added to crew database!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

// find one member
router.route('/:id').get((req, res) => {
    Member.findById(req.params.id)
      .then(member => res.json(member))
      .catch(err => res.status(400).json('Error: ' + err));
  });

// find one and delete
router.route('/:id').delete((req, res) => {
    Member.findByIdAndDelete(req.params.id)
      .then(() => res.json('Member deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

// find by id to update
router.route('/update/:id').post((req, res) => {
  Member.findById(req.params.id)
    .then(member => {
      member.membername = req.body.membername;


      member.save()
        .then(() => res.json('Member updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;

