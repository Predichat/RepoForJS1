const breakfastMenu = ['pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
const mainCourseMenu = ['Steak','Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cacke', 'Ice Cream', 'Pudding', 'Fruit Salad'];

const breakfastMenuItemsHTML = breakfastMenu.map((item,index) => `<p> Item ${index + 1}: ${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;