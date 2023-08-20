import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getBanners } from '../service'

export const getBannerListAction = createAsyncThunk(
  'banner',
  async (arg, { dispatch }) => {
    const res: any = await getBanners()
    console.log(res)
    dispatch(recommendSlice.actions.changeBannerList(res.banners))
    return res.banners
  }
)

interface IRecommend {
  bannerList: any[]
}

const initialState: IRecommend = {
  bannerList: []
}

const recommendSlice = createSlice({
  name: 'banner',
  initialState,
  reducers: {
    changeBannerList(state, { payload }) {
      console.log(payload, 111)
      state.bannerList = payload
    }
  }
})

export default recommendSlice.reducer
