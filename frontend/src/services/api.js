import  { Fetch } from './fetch'

//------------------ LOGIN -------------------
export const login = async(data) => {
    const res = await Fetch("POST", '', '/login/login', data)
    return res
}
//------------------ ALBUM -------------------
export const albumAdd = async(data) => {
    const res = await Fetch("POST", '', '/album/add', data)
    return res
}
export const albumEdit = async(data) => {
    const res = await Fetch("POST", '', '/album/edit', data)
    return res
}
export const albumAll = async (data, token = "") => {
    const res = await Fetch("GET", token, `/album/lists`, data);
    return res;
};
export const albumDeleted = async (data, token = "") => {
    const res = await Fetch("DELETE", token, `/album/deleted`, data);
    return res;
};
//------------------ LANGUAGE -------------------
export const languageAdd = async(data) => {
    const res = await Fetch("POST", '', '/language/add', data)
    return res
}
export const languageEdit = async(data) => {
    const res = await Fetch("POST", '', `/language/edit/${data.id}`, data)
    return res
}
export const languageAll = async (data, token = "") => {
    const res = await Fetch("GET", token, `/language/lists`, data);
    return res;
};
export const languageDeleted = async (data, token = "") => {
    const res = await Fetch("DELETE", token, `/language/deleted`, data);
    return res;
};
//------------------ OWNER -------------------
export const ownerAdd = async(data) => {
    const res = await Fetch("POST", '', '/owner/add', data)
    return res
}
export const ownerEdit = async(data) => {
    const res = await Fetch("POST", '', `/owner/edit/${data.id}`, data)
    return res
}
export const ownerAll = async (data, token = "") => {
    const res = await Fetch("GET", token, `/owner/lists`, data);
    return res;
};
//------------------ RESULT -------------------
export const resultAdd = async(data) => {
    const res = await Fetch("POST", '', '/result/add', data)
    return res
}
export const resultEdit = async(data) => {
    const res = await Fetch("POST", '', '/result/edit', data)
    return res
}
export const resultAll = async (data, token = "") => {
    const res = await Fetch("GET", token, `/result/lists`, data);
    return res;
};
export const resultDeleted = async (data, token = "") => {
    const res = await Fetch("DELETE", token, `/result/deleted`, data);
    return res;
};
//------------------ SKILL -------------------
export const skillAdd = async(data) => {
    const res = await Fetch("POST", '', '/skill/add', data)
    return res
}
export const skillEdit = async(data) => {
    const res = await Fetch("POST", '', `/skill/edit/${data.id}`, data)
    return res
}
export const skillAll = async (data, token = "") => {
    const res = await Fetch("GET", token, `/skill/lists`, data);
    return res;
};
export const skillDeleted = async (data, token = "") => {
    const res = await Fetch("DELETE", token, `/skill/deleted`, data);
    return res;
};
//------------------ ABOUTME -------------------
export const aboutmeAdd = async(data) => {
    const res = await Fetch("POST", '', '/aboutme/add', data)
    return res
}
export const aboutmeEdit = async(data) => {
    const res = await Fetch("POST", '', `/aboutme/edit/${data.id}`, data)
    return res
}
export const aboutmeAll = async (data, token = "") => {
    const res = await Fetch("GET", token, `/aboutme/lists`, data);
    return res;
};
//------------------ RESUME -------------------
export const resumemeAdd = async(data) => {
    const res = await Fetch("POST", '', '/resume/add', data)
    return res
}
export const resumemeEdit = async(data) => {
    const res = await Fetch("POST", '', `/resume/edit/${data.id}`, data)
    return res
}
export const resumemeAll = async (data, token = "") => {
    const res = await Fetch("GET", token, `/resume/lists`, data);
    return res;
};
//------------------ COMMENT -------------------
export const commentAdd = async(data) => {
    const res = await Fetch("POST", '', '/comment/add', data)
    return res
}
export const commentAll = async (data, token = "") => {
    const res = await Fetch("GET", token, `/comment/lists`, data);
    return res;
};
