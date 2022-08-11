var express = require("express");
var router = express.Router();
const requestify = require("requestify");

/* GET home page. */
router.post("/", async function (req, res, next) {
  try {
    console.log('Send with', { inbox_id: req.body.inbox_id }, req.cookies);
    requestify.request(
      `https://saletend-web-git-feature-inbox-bracster-software.vercel.app/api/inbox/fetchAndSaveInboxMessages`,
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
