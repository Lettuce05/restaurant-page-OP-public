const loadHomeScreen = () => {
    const homeScreen = document.createElement("div");
    const homeTitle = document.createElement("div");
    homeTitle.classList.add("homeTitle");
    homeTitle.innerText = "summerlin's hot spot";
    homeScreen.appendChild(homeTitle);
    const barImg = document.createElement("img");
    barImg.classList.add("barImg");
    barImg.src = "img/bar.jpg";
    barImg.alt = "Picture of the inside of the bar.";
    homeScreen.appendChild(barImg);

    return homeScreen;
}

export {loadHomeScreen}