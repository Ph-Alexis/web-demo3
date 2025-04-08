// Dữ liệu sản phẩm với hình ảnh
const products = [
  {
    name: "Áo thun nam",
    price: 200000,
    image:
      "https://aoxuanhe.com/upload/product/axh-098/ao-thun-nam-polo-den-tron-cotton.jpg",
  },
  {
    name: "Áo sơ Nam",
    price: 300000,
    image:
      "https://i.pinimg.com/originals/0c/89/c6/0c89c6c265e2ccb7c42ebab19fb0efb6.jpg",
  },
  {
    name: "Quần jean nam",
    price: 350000,
    image:
      "https://i.pinimg.com/originals/0c/89/c6/0c89c6c265e2ccb7c42ebab19fb0efb6.jpg",
  },
  {
    name: "Váy liền nữ",
    price: 400000,
    image:
      "https://via.placeholder.com/300x400?text=V%C3%A1y+li%C3%AAn+n%E1%BB%AF",
  },
];

// Hàm hiển thị sản phẩm
function displayProducts() {
  const productList = document.getElementById("product-list");
  productList.innerHTML = ""; // Clear danh sách sản phẩm hiện tại

  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h5>${product.name}</h5>
        <p>Giá: ${product.price.toLocaleString()}đ</p>
        <button>Thêm vào giỏ</button>
      `;

    productList.appendChild(productCard);
  });
}

// Gọi hàm để hiển thị sản phẩm khi trang tải xong
document.addEventListener("DOMContentLoaded", displayProducts);
