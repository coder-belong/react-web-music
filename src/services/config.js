const devBaseURL = "http://www.belong.run:8882";
const proBaseURL = "http://www.timecrush.cn:8882";
// const devBaseURL = "http://localhost:8080";

export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseURL: proBaseURL;
export const TIMEOUT = 9999999;

