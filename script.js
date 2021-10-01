// items
const menu = [
    {
        id: 1,
        title: "buttermilk pancakes",
        category: "breakfast",
        price: 15.99,
        img: './images/photo(1).jpg',
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Cupiditate, porro aliquid iusto quisquam nisi sequi.",
    },
    {
        id: 2,
        title: "dinner double",
        category: "lunch",
        price: 15.99,
        img: './images/photo(2).jpg',
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Cupiditate, porro aliquid iusto quisquam nisi sequi.",
   
    },
    {
        id: 3,
        title: "godzilla milkshake",
        category: "shakes",
        price: 15.99,
        img: './images/photo(3).jpg',
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Cupiditate, porro aliquid iusto quisquam nisi sequi.",
    },
    {
        id: 4,
        title: "dinner double",
        category: "lunch",
        price: 15.99,
        img: './images/photo(4).jpg',
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Cupiditate, porro aliquid iusto quisquam nisi sequi."
   
    },
    {
        id: 5,
        title: "dinner double",
        category: "breakfast",
        price: 15.99,
        img: './images/photo(5).jpg',
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Cupiditate, porro aliquid iusto quisquam nisi sequi."
   
    },
    {
        id: 6,
        title: "shake",
        category: "shakes",
        price: 15.99,
        img: './images/photo(6).jpg',
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Cupiditate, porro aliquid iusto quisquam nisi sequi."
    },
    {
        id: 7,
        title: "Egss",
        category: "dinner",
        price: 15.99,
        img: './images/photo1.jpg',
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Cupiditate, porro aliquid iusto quisquam nisi sequi."
    }
];

// select the parent in which will show up the menu items
const menuShow = document.querySelector('.menu-list');

const btnsShow = document.querySelector('.btn-groups');


// in loaded page show all the menu items
window.addEventListener('DOMContentLoaded', function () {
    DisplaymenuItem(menu);

    /// to add new category
    const categories = menu.reduce(
        function (values, item) {

            if (!values.includes(item.category)) {
                values.push(item.category);
            }

            return values;
        }, ['all']
    );

    const categoryBtns = categories.map(function (category) {
        return `<button type = "button" 
        class="btn" data-id=${category}> 
        ${category}</button>`
    })
        .join("");
      
    btnsShow.innerHTML = categoryBtns;


    // select all the buttons
    const filterBtns = document.querySelectorAll('.btn');


    // filter items with btns
    filterBtns.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            //  let clickedBtn = e.currentTarget.dataset;
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function (menuItem) {
               
                if (menuItem.category === category) {
                   return menuItem;
                    
                }
               });
               
                if (category === 'all') {
                    DisplaymenuItem(menu);
                } else {
                   DisplaymenuItem(menuCategory)
                }
        });
    });
});

function DisplaymenuItem(menuItem) {
     let displayMenu = menuItem.map(function (item) {
                
    return `<article class="menu-content">
    <img src= ${item.img} alt=${item.title} />
        <div class="menu-info">
            <div class="menu-title">
                <h4>${item.title}</h4>
                <span class="price">$ ${item.price}</span>
            </div>
            <hr>
            <p class="menu-description">
                 ${item.desc}
            </p>
         </div>
     </article>`;
     });
     displayMenu = displayMenu.join('');
    menuShow.innerHTML = displayMenu;
    
}