export function setSkipButton(value){
    localStorage.setItem('skipButton', value);
}

export function getSkipButton() {
    return localStorage.getItem('skipButton');
}
