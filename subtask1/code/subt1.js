const productlist = product.getElementById('productlist');
const search = product.getElementById('search');
let pro = [];

search.addEventListener('keyup', (e) => {
    const sears = e.target.value.toLowerCase();

    const filpro = pro.filter((product) => {
        return (
            product.name.toLowerCase().includes(sears) ||
            product.house.toLowerCase().includes(sears)
        );
    });
    displayproducts(filpro);
});

const loadproducts = async () => {
    try {
        const res = await fetch('https://drive.google.com/file/d/1c0moEehjrYKGOmY-OYrZ7ELqtu24QMay/view');
        pro = await res.json();
        displayproducts(pro);
    } catch (err) {
        console.error(err);
    }
};

const displayproducts = (products) => {
    const htmlString = products
        .map((product) => {
            return `
            <li class="product">
                <h2>${product.title}</h2>
                <p>id: ${product.id}</p>
                <p>description: ${prodcut.description}</p>
                <p>price: ${product.price}</p>
                <p>discountpercentage: ${product.discountperccentage}</p>
                <p>rating:${product.rating}</p>
                <p>stock: ${product.stock}</p>
                <p>brand: ${product.brand}</p>
                <p>category: ${product.category}</p>
                <img src="${product.image}"></img>
            </li>
        `;
        })
        .join('');
    productlist.innerHTML = htmlString;
};

loadproducts();
