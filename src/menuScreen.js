const loadMenuScreen = () => {
    const menuScreen = document.createElement("div");
    // Create menu title section
    const menuTitle = document.createElement("div");
    menuTitle.classList.add("menu-title");
    // Create menu title
    const menuTitleTitle = document.createElement("p");
    menuTitleTitle.classList.add("title");
    menuTitleTitle.innerText = "UPTOWN ORIGINALS";
    menuTitle.appendChild(menuTitleTitle);
    // Create menu subtitle
    const menuSubtitle = document.createElement("p");
    menuSubtitle.classList.add("menu-subtitle");
    menuSubtitle.innerText = "Our menu features a variety of uppetizers, salad creations and signature burgers. But don’t forget to take a Stroll…";
    menuTitle.appendChild(menuSubtitle);
    menuScreen.appendChild(menuTitle);

    // Create Menu Content Section
    const menuContent = document.createElement("div");
    menuContent.classList.add("menu-content");
    // Create Menu Tabs Section
    const menuTabs = document.createElement("div");
    menuTabs.classList.add("menu-tabs");
    const tabTitles = ["UPPETIZERS", "GREENS", "BAR FOOD", "STROLLS", "DESSERT"];
    const tabIds = ["uppetizers", "greens", "barFood", "strolls", "dessert"];

    let tabs = [];
    // create tabs
    for(let i = 0; i < tabTitles.length; i++){
        const tabSpan = document.createElement("span");
        tabSpan.id = tabIds[i];
        tabSpan.style = "cursor: pointer;";
        const tabDiv = document.createElement("div");
        tabDiv.innerText = tabTitles[i];
        tabSpan.appendChild(tabDiv);
        tabs.push(tabSpan);
        menuTabs.appendChild(tabSpan);
    }
    // add menu Tabs to menu content
    menuContent.appendChild(menuTabs);

    // Array for tab images
    const tabImgs = ['img/Uppetizers.jpg', 'img/greens.jpg', 'img/bar-food.jpg', 'img/strolls.jpg', 'img/Dessert.jpg']
    
    // Array for uppetizers items
    const itemsList = [
        [
            {
            "name": "SWEET CHILI FRIED SHRIMP", 
            "desc": "House made potato chips or shoestring fries tossed with parmesan cheese, parsley and truffle oil", 
            "price": "$14"
            }, 
            {
            "name": "TRUFFLE CHIPS or FRIES",
            "desc": "Six (6) beer battered shrimp deep fried golden brown then tossed in Frank′s sweet chili sauce",
            "price": "$8"}, 
            {
            "name": "BACON WRAPPED JALEPENOS", 
            "desc": "Stuffed with our savory cheese blend, wrapped in applewood smoked bacon",
            "price": "$10"
            },
            {
                "name": "BSB GLAZED BACON",
                "desc": "A bouquet of thick cut, Brown Sugar Bourbon candied bacon",
                "price": "$9"
            },
            {
                "name": "ROASTED CAULIFLOWER GRATIN",
                "desc": "Tender cauliflower tossed in a savory house made cheese sauce , roasted red pepper, chives, topped with buttered cracker crumbs then baked until bubbly golden brown",
                "price": "$10"
            },
            {
                "name": "A COUPLE A MEATBALLS",
                "desc": "Two home-made meatballs in our house marinara, whipped seasoned ricotta and garlic toast",
                "price": "$10"
            },
            {
                "name": "CHICKEN WINGS",
                "desc": "8 Twice cooked chicken wings finished with one of our four sauces. Parmesan/Garlic, Honey Bourbon BBQ, Traditional, Medium, or Mild Sauce",
                "price": "$14"
            },
            {
                "name": "UPTOWN STYLE NACHOS",
                "desc": "Seasoned and baked bread chips topped with ground sausage or pepperoni cups, melted Italian cheeses, cherry pepper relish &amp; finished with fresh Italian parsley and parmesan cheese (add $2 if you’d like both meats)",
                "price": "$12"
            },
            {
                "name": "CHERRY PEPPER CALAMARI",
                "desc": "Fried then tossed in a spicy cherry pepper relish with a light lemon butter sauce, served with a side of marinara sauce",
                "price": "$12"
            },
            {
                "name": "THREE UPTOWN SLIDERS",
                "desc": "Mea-TA-ball, Philly Cheese Steak or Fried Fish (Choose any Combo of 3) Sundays: Choose the winning Combo and get them at 50% off, Dine in only",
                "price": "$13"
            },
            {
                "name": "CHARCUTERIE",
                "desc": "Assortment of Imported and Domestic meats & cheeses, seasoned olive medley. Serves 2-3 For additional portions add $5 per portion",
                "price": "$17"
            },
            {
                "name": "DOWNTOWN SUMMERLIN SPROUTS",
                "desc": "Brussel sprouts tossed in a garlic butter-agave glaze with romano cheese & croutons **Add bacon bits for $2",
                "price": "$9"
            },
            {
                "name": "FRANKIE’S ITALIAN SUSHI",
                "desc": "Shaved ribeye (carpaccio) filled with arugula, pesto and sun dried tomatoes rolled up and sliced like a sushi roll, then topped with a balsamic glaze and a pinch of sea salt",
                "price": "$16"
            },
        ],
        [
            {
                "name": "THE CLEAN GREEN",
                "desc": "Chopped lettuce blend, grape tomatoes, cucumbers & thinly sliced red onion with the house vinaigrette",
                "price": "$10"
            },
            {
                "name": "THE MEAN GREEN ANTIPASTO",
                "desc": "It’s the Clean Green with roasted red peppers, ham, salami, pepperoni and provolone cheese",
                "price": "$15"
            },
            {
                "name": "THE GREEN GREEN",
                "desc": "Fresh spinach, thinly sliced red onion, crumbled gorgonzola cheese, hard-boiled egg, bits of tender & crisp bacon with a sweet bacon vinaigrette and candied cranberries",
                "price": "$15"
            },
            {
                "name": "MR CAESAR",
                "desc": "Romaine lettuce blend, shaved parmesan cheese and house made croutons tossed in our house made Caesar dressing",
                "price": "$12"
            },
            {
                "name": "MS GREEK",
                "desc": "Chopped lettuce blend, tomatoes, seasoned garbanzo beans, crumbled feta cheese, kalamata olives and cucumbers, thinly sliced red onion, and banana pepper rings with a house made oregano vinaigrette",
                "price": "$14"
            },
            {
                "name": "Add grilled or breaded chicken breast to any salad for $5 and grilled shrimp or salmon for $8",
                "desc": "",
                "price": ""
            },
        ],
        [
            {
                "name": "THE UPTOWN BURGER",
                "desc": "8 oz FU patty topped with American cheese, lettuce, tomato and onion",
                "price": "$14"
            },
            {
                "name": "ALL-IN PRIME CHEESEBURGER",
                "desc": "A hand-crafted 9 oz patty with our secret blend of 5 meats, topped with caramelized onions, Cheddar & American cheese & served on our buttered brioche bun....mic drop (HINT: if you have to know the blend, ask and Frankie Pepperoni′s staff will tell you)",
                "price": "$17"
            },
            {
                "name": "BUFFALO CHICKEN BURGER",
                "desc": "A romano crusted chicken breast with lettuce, tomato and onion topped with ranch dressing on our buttered brioche bun. *Grilled chicken also available instead of breaded",
                "price": "$14"
            },
            {
                "name": "IMPOSSIBLE BURGER OPTION",
                "desc": "Burger substitute for any of the above burgers served on our buttered onion brioche bun",
                "price": "$5 Additional"
            },
            {
                "name": "THE DOG DEUCE",
                "desc": "A dynamic duo of RI Style weiners on steamed buns w/mustard, a fine chili sauce, diced onion & celery salt (all the way)!",
                "price": "$10"
            },
            {
                "name": "PULLED PORK SANDWICH",
                "desc": "Pulled pork sandwich served with a side of honey bourbon BBQ sauce and fried onion straws",
                "price": "$14"
            },
            {
                "name": "MS. CHRIS’ CAULIFLOWER RICE & CHICKEN BOWL",
                "desc": "Tender marinated chicken breast or romano breaded chicken breast with cauliflower rice & roasted veggies",
                "price": "$15"
            },
            {
                "name": "FISH & CHIPS",
                "desc": "Beer-battered filet of cod with our house made CHIPS (or fries if you choose)",
                "price": "$14"
            },
            {
                "name": "TRUFFLE MAC & JEEZ",
                "desc": "Macaroni with a blend of truffle, cheeses and seasonings to make it creamy, crunchy and delightful",
                "price": "$13"
            },
            {
                "name": "MAMA CHRIS’ MARSALA",
                "desc": "tender chicken breast topped w/Marsala wine sauce & mushrooms served w/a side of fusilli pasta tossed w/butter, romano cheese & seasoned spinach",
                "price": "$18"
            },
            {
                "name": "PHILLY CHEESE STEAK SUB",
                "desc": "Seasoned Philly steak and grilled onions, mushrooms and peppers with melted American cheese served “in the garden” with LTO and mayo",
                "price": "$15"
            },
            {
                "name": "HOT OR COLD ITALIAN SUB",
                "desc": "Ham, salami, capicola and pepperoni, finished with lettuce, tomato, onions, cherry pepper relish and Italian dressing, served cold or oven baked",
                "price": "$15"
            },
            {
                "name": "MEA-TA-BALL SUB",
                "desc": "A classic meatball sub with mozzarella cheese baked to perfection",
                "price": "$15"
            },
            {
                "name": "HOMETOWN CHICKEN PARM SUB",
                "desc": "Romano crusted chicken with marinara sauce and melted mozzarella cheese baked on a garlic bread sub roll",
                "price": "$15"
            },
            {
                "name": "CHICKEN PARM DINNER",
                "desc": "Two Romano crusted chicken with marinara sauce and melted mozzarella cheese served with a side of fusilli pasta",
                "price": "$18"
            },
            {
                "name": "ALL-IN PIZZA BURGER SUB",
                "desc": "Our famous FU all-in burger patty on a garlic bread sub roll, topped with marinara and mozzarella cheese then baked to perfection",
                "price": "$18"
            },
            {
                "name": "GIGI PIZZA PIE",
                "desc": "Ahhh-bar pizza smothered with ground sausage, ground pepperoni and cherry pepper relish baked crispy",
                "price": "$18"
            },
            {
                "name": "THE SUMMERLIN SQUARE",
                "desc": "A beautiful blend of mozz, ricotta and buratta cheeses, heirloom tomatoes and seasoned spinach finished w/a balsamic truffle glaze",
                "price": "$18"
            },
            {
                "name": "FRANKIE PEP’S CHEESE PIZZA",
                "desc": "Additional toppings $2-$5 each then baked crispy",
                "price": "$12"
            },
            {
                "name": "GLUTEN FREE CAULIFLOWER CRUST or PASTA OPTION",
                "desc": "Additional toppings $2-$5 each then baked crispy",
                "price": "$4"
            }
        ],
        [
            {
                "name": "BROOKLYN STROLL",
                "desc": "Thinly sliced ham, salami, & pepperoni, cherry pepper relish, mozzarella cheese & a light marinara sauce",
                "price": "$18"
            },
            {
                "name": "SUMMERLIN STROLL",
                "desc": "Sauteed spinach & mozzarella and seasoned ricotta cheeses, Add Pepperoni for an extra $3",
                "price": "$16"
            },
            {
                "name": "AY~YO PHILLY STROLL",
                "desc": "Seasoned Philly steak & grilled onions w/ a blend of mozzarella & creamy American chees",
                "price": "$17"
            },
            {
                "name": "MEA~TA~BALL STROLL",
                "desc": "Homemade meatballs, seasoned ricotta and mozzarella cheese",
                "price": "$17"
            },
            {
                "name": "FRANKIE PEP STROLL",
                "desc": "Loads of pepperoni and mozzarella cheese with marinara",
                "price": "$16"
            },
            {
                "name": "KNIGHT STROLL",
                "desc": "Sausage, peppers, onions & mushrooms, mozzarella cheese and a light marinara sauce",
                "price": "$18"
            },
            {
                "name": "MORNING STROLL",
                "desc": "Pepperoni and scrambled eggs with a blend of mozzarella and American cheese",
                "price": "$16"
            },
            {
                "name": "AVIATOR STROLL",
                "desc": "Pepperoni, sausage, meatballs and mozzarella cheese and a light marinara sauce",
                "price": "$18"
            },
            {
                "name": "HOW YOU DOIN STROLL",
                "desc": "Make your own! Mozzarella cheese and any other 3 toppings (we may advise against wacky choices-just sayin)",
                "price": "$18"
            },
            {
                "name": "All Strolls are approx 12 inches and serve 1-3 people the first time. After that you won’t share.",
                "desc": "",
                "price": ""
            },
        ],
        [
            {
                "name": "CANNOLI DIP",
                "desc": "House made cannoli cream w/chocolate chips, assorted biscotti cookies for dipping",
                "price": "$10"
            },
            {
                "name": "MASON JAR BSB BOURBON CAKE",
                "desc": "House-made brown sugar bourbon cake made from scratch, served with vanilla bean ice cream *CHOCOLATE also available",
                "price": "$10"
            },
            {
                "name": "PEANUT BUTTER PIE PARFAIT",
                "desc": "A mason jar filled with whipped peanut butter filling on an Oreo cookie crust topped with shaved chocolate sprinkles, cookie crumbs and whipped cream (add $2 ToGo)",
                "price": "$10"
            },
            {
                "name": "UPTOWN SUGAR STROLL",
                "desc": "Eight inches of handcrafted thinly stretched bread dough stuffed with NY-style cheese cake and Nutella, deep fried to a crispy golden brown then drizzled with a bourbon caramel glaze served with vanilla bean ice cream",
                "price": "$10"
            },
            {
                "name": "GLUTEN FREE BROWNIE SUNDAE- DINE-IN ONLY",
                "desc": "Gluten free brownie with a scoop of Blue Bunny vanilla ice cream, Hershey′s choc syrup and whipped cream",
                "price": "$12"
            },
        ]
    ]
    
    // generate menuTab
    const displayMenuTab = (activeTab, tabImg, tabItems) => {
        // remove current active tab
        tabs.forEach(tab => {
            if (tab.classList.contains("active-menu-tab")){
                tab.classList.toggle("active-menu-tab");
            }
        })
        // make new activeTab active
        activeTab.classList.toggle("active-menu-tab");
        // add menu-tab
        const menuTab = document.createElement("div");
        menuTab.classList.add("menu-tab");
        // create img div
        const imgDiv = document.createElement("div");
        imgDiv.classList.add("tab-img");
        const menuImg = document.createElement("img");
        menuImg.src = tabImg;
        // complete imgDiv
        imgDiv.appendChild(menuImg);
        // add imgDiv to menuTab
        menuTab.appendChild(imgDiv);

        // create tab-items section
        const tabItemsDiv = document.createElement("div");
        tabItemsDiv.classList.add("tab-items");

        // create tab-items
        tabItems.forEach(item => {
            const tabItem = document.createElement("div");
            tabItem.classList.add("tab-item");
            
            const itemName = document.createElement("p");
            itemName.classList.add("item-name");
            itemName.innerText = item["name"];
            tabItem.appendChild(itemName);
            const itemDesc = document.createElement("p");
            itemDesc.classList.add("item-desc");
            itemDesc.innerText = item["desc"];
            tabItem.appendChild(itemDesc);
            const itemPrice = document.createElement("p")
            itemPrice.classList.add("item-price");
            itemPrice.innerText = item["price"];
            tabItem.appendChild(itemPrice);
            const hr = document.createElement("hr");
            hr.classList.add("item-hr");
            tabItem.appendChild(hr);

            // add tab item to parent div
            tabItemsDiv.appendChild(tabItem)
        });
        // append tabItems div to menuTab 
        menuTab.appendChild(tabItemsDiv);
        // return menuTab
        return menuTab;
    }

    // add default menu Tab
    menuContent.appendChild(displayMenuTab(tabs[0], tabImgs[0], itemsList[0]));
    // add menuContent to screen
    menuScreen.appendChild(menuContent);

    // tab event listeners
    function removeAllChildNodes(parent) {
        while(parent.firstChild){
            parent.removeChild(parent.firstChild);
        }
    }

    tabs.forEach((tab, index) => {
        tab.addEventListener("click", () => {
            removeAllChildNodes(menuContent);
            menuContent.appendChild(menuTabs);
            menuContent.appendChild(displayMenuTab(tab, tabImgs[index], itemsList[index]));
        })
    })

    return menuScreen;
}

export {loadMenuScreen}