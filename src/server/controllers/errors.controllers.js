import HTTP_STATUS from '../../config/constants.js'

export const notFound = (_,res)=>
res.status(HTTP_STATUS.not_found.code).json({code: HTTP_STATUS.not_found.code, message: HTTP_STATUS.not_found.text})