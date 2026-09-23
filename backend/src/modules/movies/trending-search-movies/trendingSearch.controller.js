import { HTTP_STATUS } from "../../../constants/httpStatus.js"
import { asyncHandler } from "../../../utils/asyncHandler.js"
import { getTrendingSearchService } from "./trendingSearch.service.js"

export const getTrendingSearch = asyncHandler(async (req, res) => {
  const trendingSearch = await getTrendingSearchService()

  return res.status(HTTP_STATUS.OK).json({
    success: true,
    trendingSearch
  })
})

