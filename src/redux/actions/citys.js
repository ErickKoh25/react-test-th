import { types } from "../types/types";

export const setCitys = (citys) => ({
    type: types.citysLoaded,
    payload: citys
})
