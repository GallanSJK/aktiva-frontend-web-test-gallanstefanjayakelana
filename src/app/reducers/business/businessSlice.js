import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchBusinessApi } from './businessApi';

// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }


export const fetchBusiness = createAsyncThunk(
    'business/fetchBusiness',
    async() => {
        const res = await fetchBusinessApi()
        return res.data;
    }
)

export const filteBusiness = createAsyncThunk(
  'business/filterBusiness',
  async(payload) => {
      const res = fetchBusinessApi(payload);
      return res
  }
)

export const businessSlice = createSlice({
    name: 'business',
    initialState: {
        data: [],
        initData: [],
        loading: 'idle',
        message: ''
    },
    reducers: {},
    // {
    //   filterBusiness: (state, action) => {
    //     const filters = action.payload
    //     state.data = state.initData.filter(el => {
    //         return Object.keys(filters).every(filter => {
    //           let availableAt = true,
    //           capacity = true,
    //           typeDriver = true;
    //             if(filter === 'availableAt') {
    //                 const d1 = new Date(filters[filter]);
    //                 const d2 = new Date(el[filter]);
    //                 console.log(d1, d2)
    //                 // return d1.getTime() >= d2.getTime() 
    //                 availableAt = d1.getTime() >= d2.getTime() 
    //             }
    //             if(filter === 'capacity') {
    //               capacity = el[filter] >= filters[filter]
    //             }
    //             if(filter === 'typeDriver') {
    //               typeDriver = el[filter] >= filters[filter]
    //             }
    //             return capacity && availableAt && typeDriver
    //         });
    //     })
    //   },
    // },
    
    extraReducers: (builder) => {
        builder
            .addCase(fetchBusiness.pending, (state) => {
                state.loading = 'loading'
            })
            .addCase(fetchBusiness.fulfilled, (state, action) => {
                state.loading = 'idle';
                const business = action.payload.map((busines) => {
                  return {
                    ...busines,
                  };
                })
                state.data = business
                state.initData = business
            })
            .addCase(fetchBusiness.rejected, (state, action) => {
                state.loading = 'idle';
                state.message = action.payload.data
            })
  }
})

export const selectBusiness = (state) => state.business.data
export const selectBusinessLoading = (state) => state.business.loading
// export const { filterBusiness } = businessSlice.actions
export default businessSlice.reducer