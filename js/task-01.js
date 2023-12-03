const categories = document.querySelector('#categories');

const categoriesNumbers = categories.children.length;

console.log("Namber of catigories: ", categoriesNumbers);


const items = document.querySelectorAll('.item');
Array.prototype.forEach.call(items, (element) => {
    const title = element.querySelector('h2').innerHTML;
    const itemsLength = element.querySelectorAll('li').length;

    console.log(`Category: ${title}`),
    console.log(`Elements: ${itemsLength}`);
});

