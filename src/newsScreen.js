const loadNewsScreen = () => {
    const newsScreen = document.createElement("div");
    newsScreen.classList.add("news-container");
    // create and append news title
    const newsTitle = document.createElement("p");
    newsTitle.classList.add("news-title");
    newsTitle.innerText = "Frankie's Uptown News";
    newsScreen.appendChild(newsTitle);

    // create news articles
    const articles = [
        {
            "img": "img/bar.jpg",
            "date": "August 3, 2020",
            "title": "Burgers and Bourbon in Summerlin",
            "categories": ["Admin", "Food"],
            "snippet": "For burgers and bourbon in Summerlin, there’s only one place, Frankie’s Uptown. Located in Downtown Summerlin we are proud to have celebrated our one year anniversary and going strong. While we have been challenged in the past few months our staff embodies the Frankie’s Uptown fighting spirit. We like to call that the FU Spirit! As a neighborhood bar, we have been serving Las Vegas locals exactly what they need, quality food, exceptional spirits and friendly service. When you arrive at Frankie’s it’s so comfortable you’ll feel like you’ve been here before. Welcome Back Las  Vegas! Burgers We have two..."
        },
        {
            "img": "img/article2.jpg",
            "date": "June 1, 2020",
            "title": "Frankie's Uptown Bourban Basics",
            "categories": ["Admin", "Frankie's Uptown Cocktails"],
            "snippet": "Frankie’s Uptown bourbon basics – a short tutorial of bourbon, its origins and where the industry currently sits. When it comes to whiskeys and bourbons, there are a few things we will cover in this article. However, there is one simple fact to learn: All bourbons are whiskeys, but not all whiskeys are bourbon. The whiskey tree includes types such as Scotch single malt, rye, Canadian, Irish single pot still, and many others. Bourbon is just one of the branches. Bourbon can only be made in America because in 1964, Congress declared bourbon as “America’s Native spirit.” While you have heard of..."
        },
        {
            "img": "img/article3.jpg",
            "date": "March 31, 2020",
            "title": "Frankie’s Uptown First Anniversary",
            "categories": ["Admin", "Food"],
            "snippet": "Frankie’s Uptown First Anniversary is something to celebrate. With overwhelming community support along with our amazing family and friends, we’ve had an incredible year. When the world gets back to normal, we are looking forward to the future and all the great things ahead. A Look Back It’s hard to believe that just one year ago we took over an existing restaurant in Downtown Summerlin. Once we received the keys, we went right to work on transforming the previous décor. In just a little over three months, we renovated the front of the house structure. With some challenges along the..."
        },
        {
            "img": "img/article4.jpg",
            "date": "March 3, 2020",
            "title": "Patio Dining at Frankie’s Uptown",
            "categories": ["Admin", "Food"],
            "snippet": "Patio Dining at Frankie’s Uptown is a fantastic way to enjoy lunch, dinner or just finish the day with a drink outside. With evergreen foliage and comfortable seating, our patio is designed for comfort. With mild winter weather and umbrellas for the summer, our guests enjoy the patio all year long. Facing East, the patio has the best of both worlds. During the day the patio gets full sun making it great for any gathering. In the evening guests watch the sun slide behind the building with a glimpse of the colorful Western sky. If you have a few people,..."
        },
        {
            "img": "img/article5.jpg",
            "date": "February 4, 2020",
            "title": "Bartenders at Frankie’s Uptown",
            "categories": ["Admin", "Frankie's Uptown Cocktails"],
            "snippet": "Bartenders at Frankie’s Uptown Las Vegas are always friendly and have the perfect suggestion to quench that thirst. Whether you’re coming in for Happy Hour, Late Night Hour or the Dinner Hour, we’ve got what you need. If you know what you like, call it out and we’ll make it for you. With a huge selection of whiskeys, bourbons, vodkas and specialty liquor, you might be surprised. Happy Hour With Happy Hour five days a week, you can relax after work and take advantage of great drink specials. Running 3pm-6:16pm (because we last 15 minutes longer) our Happy Hour includes..."
        },
        {
            "img": "img/article6.jpg",
            "date": "January 7, 2020",
            "title": "Healthy Food Options at Frankie’s Uptown",
            "categories": ["Admin", "Food"],
            "snippet": "Healthy food options at Frankie’s Uptown are a little know part of our menu. When people first hear about Frankie’s Uptown – A Neighborhood Bar, they immediately think bar food. While that is true, Owners Chris and Frank Lee have gone to great lengths to have “something for everyone.” As experience restaurateurs, Chris and Frank know what their guests want. Like every great ownership group, they cater to the core market and let the guests decide what stays on the menu. With their location in Downtown Summerlin, the type of guests vary. From the Las Vegas Ballpark crowd after a..."
        },
        {
            "img": "img/article7.jpg",
            "date": "December 4, 2019",
            "title": "Gift Cards for Foodies",
            "categories": ["Admin", "Holidays"],
            "snippet": "Gift cards for foodies are perfect this holiday season. With the gift giving season upon us, it can be tough to think of the perfect idea for the special people in our lives. But if you have a friend or family member that prides themselves on being a foodie, a gift card to Frankie’s Uptown will certainly make their year. With a wide variety of menu items, a full bar with more than 100 whiskeys and signature cocktails galore, It’s All Here at Frankie’s! Holiday Shopping When your holiday shopping heats up, you automatically head to Downtown Summerlin. If you’re..."
        }
    ];

    for(let i = 0; i < articles.length; i++){
        const articleContainer = document.createElement("div");
        articleContainer.classList.add("article-container");
        // create article photo
        const articlePhoto = document.createElement("div");
        articlePhoto.classList.add("article-photo");
        const articleImg = document.createElement("img");
        articleImg.src = articles[i].img;
        articlePhoto.appendChild(articleImg);
        articleContainer.appendChild(articlePhoto);
        // create article info
        const articleInfo = document.createElement("div");
        articleInfo.classList.add("article-info");

        const articleDate = document.createElement("p");
        articleDate.classList.add("article-date");
        articleDate.innerText = articles[i].date;
        articleInfo.appendChild(articleDate);

        const articleTitle = document.createElement("p");
        articleTitle.classList.add("article-title");
        articleTitle.innerText = articles[i].title;
        articleInfo.appendChild(articleTitle);

        const articleCategoryContainer = document.createElement("div");
        articleCategoryContainer.classList.add("article-category-container");
        const articleCategory1 = document.createElement("div");
        articleCategory1.classList.add("article-category");
        articleCategory1.innerText = articles[i].categories[0];
        articleCategoryContainer.appendChild(articleCategory1);
        const categoryDivider = document.createTextNode("/");
        articleCategoryContainer.appendChild(categoryDivider);
        const articleCategory2 = document.createElement("div");
        articleCategory2.classList.add("article-category");
        articleCategory2.innerText = articles[i].categories[1];
        articleCategoryContainer.appendChild(articleCategory2);
        articleInfo.appendChild(articleCategoryContainer);

        const articleSnippet = document.createElement("p");
        articleSnippet.classList.add("article-snippet");
        articleSnippet.innerText = articles[i].snippet;
        articleInfo.appendChild(articleSnippet);
        // append article to screen 
        articleContainer.appendChild(articleInfo);
        newsScreen.appendChild(articleContainer);
    }
    return newsScreen;
}

export {loadNewsScreen}