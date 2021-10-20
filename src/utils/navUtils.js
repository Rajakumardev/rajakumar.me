export const routes = ['/','/blog','/projects'];

export const isValidNav = (route = '') => {
    if(route) {
        return routes.includes(route);
    }
    return false;
} 