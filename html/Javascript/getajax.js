export const get = (endpoint) => {
    return $.ajax({
        method: "GET",
        url: endpoint,
        crossDomain: true,
        dataType: 'json'
    });
}