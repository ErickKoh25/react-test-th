import { types } from "../types/types";

export const setCitys = (citys) => ({
    type: types.LOADED_CITYS,
    payload: citys
})
