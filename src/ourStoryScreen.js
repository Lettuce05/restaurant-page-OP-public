const loadOurStory = () => {
    const ourStoryScreen = document.createElement("div");

    // create story title section
    const storyTitle = document.createElement("div");
    storyTitle.classList.add("story-title");
    // create and append title
    const title = document.createElement("p");
    title.classList.add("title");
    title.innerText = "Our Story";
    storyTitle.appendChild(title);
    // create and append subtitle
    const subtitle = document.createElement("p");
    subtitle.classList.add("subtitle");
    subtitle.innerText = "Our story is one of passion and community.";
    storyTitle.appendChild(subtitle);
    ourStoryScreen.appendChild(storyTitle);

    // create story content section
    const storyContent = document.createElement("div");
    storyContent.classList.add("story-content");

    // create and append story-content-photos
    const storyContentPhotos = document.createElement("div");
    storyContentPhotos.classList.add("story-content-photos");
    const barOutImg = document.createElement("img");
    barOutImg.src = "img/bar-outside.jpg";
    barOutImg.alt = "picture of the outside of Frankie's Uptown";
    storyContentPhotos.appendChild(barOutImg);
    const barDrinkImg = document.createElement("img");
    barDrinkImg.src = "img/bar-drink.jpg";
    barDrinkImg.alt = "drink with bar logo";
    storyContentPhotos.appendChild(barDrinkImg);
    storyContent.appendChild(storyContentPhotos);

    // create and append story-content-info
    const storyContentInfo = document.createElement("div");
    storyContentInfo.classList.add("story-content-info");
    // p tag contents
    const contentInfo = ['Frankie’s Uptown is a concept created by a small group of experienced Las Vegas restaurateurs dedicated to the community. Feeling locals needed an uplifting atmosphere to gather after work, watch a game or hang out with friends, Frankie’s Uptown was born.','Frankie’s goal is to serve the food and beverage needs of the entire Las Vegas valley. When you converge on Downtown Summerlin to shop, visit City National Arena or see the Aviators, you’ll stop at Frankie’s for refreshments, appetizers and dinner. Finding a spot in Downtown Summerlin couldn’t have been better timing. Come and be a part of our story.','At Frankie’s Uptown, We Are A Home Base For Locals and a Home Run For All!'];
    // add p tags
    for(let i = 0; i < contentInfo.length; i++){
        const p = document.createElement("p");
        p.innerText = contentInfo[i];
        storyContentInfo.appendChild(p);
    }

    storyContent.appendChild(storyContentInfo);
    //append storyContent section
    ourStoryScreen.appendChild(storyContent);

    return ourStoryScreen;
}

export {loadOurStory}