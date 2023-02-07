const asyncHandler = require('express-async-handler');
const Goal = require('../model/goalModels');

//@description Get all goals
//@route GET '/api/goals'
//@privacy Private

const getGoal = asyncHandler(async (req, res) => {
  const goals = await Goal.find()
  res.send(goals);
});

//@description Set all goals
//@route POST '/api/goals'
//@privacy Private
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error('insert valid input');
  }
  const goal = await Goal.create({
    text:req.body.text
  })
  res.send(goal);
});
//@description update goals
//@route PUT '/api/goals/:id'
//@privacy Private
const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400)
  throw new Error('Goal not found')
  }
  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(updatedGoal);
});
//@description delete goals
//@route DELETE '/api/goals/:id'
//@privacy Private
const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error('Goal not found');
  }
  const deletedGoal = await Goal.findByIdAndDelete(goal);

  res.send(deletedGoal);
});

module.exports = {
  getController: getGoal,
  setController: setGoal,
  updateController: updateGoal,
  deleteController: deleteGoal,
};