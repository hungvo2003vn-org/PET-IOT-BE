const getInfo = async (req, res, next) => {
	try {
		const data = await req.userService.userInfo
		res.status(200).json({data})
	} catch (err) {
		next(err)
	}
}

export default getInfo