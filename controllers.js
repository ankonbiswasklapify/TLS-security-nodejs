const getAllUsers = (req, res, next) => {
    try {

        const users = [{ id: 1, name: "John Doe" }, { id: 2, name: "Jane Doe" }];
        
        res.json({
            status: true,
            status_message: "Users retrieved successfully",
            data: users
        });
        
        next();
    } catch (e) {
        return res.status(500).json({
            status: false,
            status_message: "Something went wrong"
        })
    }
}

module.exports = {
    getAllUsers
}