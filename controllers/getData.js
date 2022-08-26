const selectData = require('../repositories/selectData');

const getData = async (req, res, next) => {
  try {
    const data = await selectData();

    if (!data.length) {
      const error = new Error('There is no data to show');
      error.statusCode = 400;
      throw error;
    }

    res.status(200).send({
      status: 'ok',
      data: data,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getData;
