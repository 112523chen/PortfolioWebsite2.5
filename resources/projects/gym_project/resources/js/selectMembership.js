const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

getMembership = () => {
    const membership = urlParams.get('membership');
    switch (membership){
        case "premium":
            document.querySelectorAll('input[name="Service"]')[0].checked = true;
            break
        case "pro":
            document.querySelectorAll('input[name="Service"]')[1].checked = true;
            break;
        default:
            document.querySelectorAll('input[name="Service"]')[2].checked = true;
            break;
    }
}

getMembership();