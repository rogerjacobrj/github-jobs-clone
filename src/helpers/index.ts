export const urlGenerator = (description: string, location: string, roleType: boolean) => {
    let url = `/positions?`;
    let params: any = {};

    if (description.length > 0) {
        params["description"] = description;
    }

    if (location.length > 0) {
        params["location"] = location;
    }

    if (roleType) {
        params["full_time"] = roleType ? "true" : "false";
    }

    let query = new URLSearchParams(params);
    let newFilterUrl = url + query;

    return newFilterUrl;
};

export const generateCount = (count: number) => {
    return Array.from(Array(count).keys());
};