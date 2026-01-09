if (window.location.href.includes("google.com/search?")) {
    let u = window.location.href;
    const arr = u.split("&");
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes("q=") && !arr[i].includes("+-quora.com")) {
            arr[i] = arr[i].concat("+-quora.com");
            window.location.replace(arr.join("&"));
            break;
        }
    }
}
