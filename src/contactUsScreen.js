const loadContactUsScreen = () => {
    const contactUsScreen = document.createElement("div");
    contactUsScreen.classList.add("contact-screen");
    // create map div
    const mapDiv = document.createElement("div");
    mapDiv.classList.add("map");
    mapDiv.id = "map";
    contactUsScreen.appendChild(mapDiv);
    // create contact-info section
    const contactInfo = document.createElement("div");
    contactInfo.classList.add("contact-info");
    // create contact-info-container section
    const contactInfoContainer = document.createElement("div");
    contactInfoContainer.classList.add("contact-info-container");
    // create social logos section
    const socialLogos = document.createElement("div");
    socialLogos.classList.add("social-logos");
    // create each social logo
    const socialImgs = ["img/facebook.svg", "img/instagram.svg", "img/twitter.svg"];
    const socialAlts = ["facebook logo", "instagram logo", "twitter logo"];
    const socialLinks = ["https://www.facebook.com/frankiesuptown/", "https://www.instagram.com/frankiesuptown/?hl=en", "https://twitter.com/frankiesuptown"];
    for(let i = 0; i < socialImgs.length; i++){
        const socialLogo = document.createElement("div");
        socialLogo.classList.add("social-logo");
        const logoContainer = document.createElement("div");
        const logoLink = document.createElement("a");
        logoLink.href = socialLinks[i];
        logoLink.target = "_blank";
        const logo = document.createElement("img");
        logo.src = socialImgs[i];
        logo.alt = socialAlts[i];
        logoLink.appendChild(logo);
        logoContainer.appendChild(logoLink);
        socialLogo.appendChild(logoContainer);
        socialLogos.appendChild(socialLogo);
    }
    // append logos to contact info container
    contactInfoContainer.appendChild(socialLogos);

    const contactTitle = document.createElement("p");
    contactTitle.classList.add("contact-info-title");
    contactTitle.innerText = "Connect With Frankie's";
    contactInfoContainer.appendChild(contactTitle);

    const contactContent = document.createElement("p");
    contactContent.classList.add("contact-info-content");
    contactContent.innerText = "Stay connected with us by sighning up for our email list. Receive exclusive offers and stay on top of specail happenings at Frankie's.";
    contactInfoContainer.appendChild(contactContent);

    const reservationInfo = document.createElement("p");
    reservationInfo.classList.add("contact-info-content");
    reservationInfo.innerText = "For reservations email us at: reservations@frankiesuptown.com or call us at: (702) 228-2766";
    contactInfoContainer.appendChild(reservationInfo);

    const openHours = document.createElement("p");
    openHours.classList.add("contact-info-title");
    openHours.innerText = "Open Hours";
    contactInfoContainer.appendChild(openHours);

    const openHours1 = document.createElement("p");
    openHours1.classList.add("contact-info-content");
    openHours1.innerText = "Wednesday - Friday: 4pm to Midnight";
    contactInfoContainer.appendChild(openHours1);

    const openHours2 = document.createElement("p");
    openHours2.classList.add("contact-info-content");
    openHours2.innerText = "Saturday - Sunday: Noon to Midnight";
    contactInfoContainer.appendChild(openHours2);

    const br = document.createElement("br");
    contactInfoContainer.appendChild(br);

    const address = document.createElement("p");
    address.classList.add("contact-info-content");
    address.innerText = "1770 Festival Plaza Dr #190, Las Vegas, Nevada 89135";
    contactInfoContainer.appendChild(address);

    contactInfoContainer.appendChild(br);
    contactInfoContainer.appendChild(br);

    const copyright = document.createElement("p");
    copyright.classList.add("copyright");
    copyright.innerText = "Frankie’s Uptown 2019 / All Rights Reserved";
    contactInfoContainer.appendChild(copyright);
    
    contactInfo.appendChild(contactInfoContainer);
    contactUsScreen.appendChild(contactInfo);

    return contactUsScreen;
}

export {loadContactUsScreen}