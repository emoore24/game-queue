module.exports.getRoom = (req, res) => {
  const roomId = req.params.roomId;
  res.render('room.html', {});
}
