const coreUrl = "https://back-end-task-xi.vercel.app/";
// const coreUrl = "http://localhost:3000/";

export function baseUrl(route){
    return `${coreUrl}${route}` ;
}
