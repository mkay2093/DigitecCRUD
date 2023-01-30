module.exports = async (req, res, next) => {

    res.finish = function (data) {
        if (data.success) {
            res.status(200).json({success: true, data: data.data, message: data.message});
        } else {
            res.status(data.errorCode ?? 500).json({success: false, error: data.error, message: data.message});
        }
    }

    next()
};
