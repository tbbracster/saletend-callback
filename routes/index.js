var express = require("express");
var router = express.Router();
const requestify = require("requestify");

/* GET home page. */
router.post("/", async function (req, res, next) {
  try {
    console.log('Send with', { inbox_id: req.body.inbox_id }, process.env.URL);
    requestify.request(
      process.env.URL,
      {
        method: 'POST',
        body: { ...req.body },
        headers: {
          'Content-Type': 'application/json',
        },
        cookies: req.cookies,
      }
    );
    res.json({ success: true });
  } catch (err) {
    res.json({ success: false });
  }
});

module.exports = router;
