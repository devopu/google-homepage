let productsBtn = document.querySelector('#productsBtn');
let productsSection = document.querySelector('.products__section');


productsBtn.addEventListener('click', function() {
    productsSection.classList.toggle('show_products');
})

document.body.addEventListener('click', function(e) {
    if(e.target == productsBtn) {
        return false;
    }

    if(e.target !== productsSection && !isDescendant(productsSection, e.target)) {
        productsSection.classList.remove('show_products');
    }
})

function isDescendant(parent, child) {
    let node = child.parentNode;

    while(node != null) {
        if(node == parent) {
            return true;
        }

        node = node.parentNode;
    }

    return false;
}