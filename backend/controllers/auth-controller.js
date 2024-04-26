const register = async (req, res) => {
  try {
    const reqData = req.body;
    console.log(reqData);
    res.status(200).json({ message: reqData });
  } catch (error) {
    console.log("Error at register route", error);
  }
};

module.exports = { register };
