export const replaceUrl = (url: string) => url && url.replace('http://travelmo.co:8080', 'https://wp.travelmo.co');
export const replaceUrlGlobal = (url: string) => url && url.replace(/http:\/\/travelmo.co:8080/g, 'https://travelmo.co');
export const replaceUrlGlobalWp = (url: string) => url && url.replace(/http:\/\/travelmo.co:8080/g, 'https://wp.travelmo.co');