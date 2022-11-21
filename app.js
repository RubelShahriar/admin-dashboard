const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const menuContainer = document.querySelector(".sidebar");
const menuItems = document.querySelectorAll(".sidebar a");

// active anchors
menuContainer.addEventListener("click", (e) => {
  for (i = 0; i < menuItems.length; i++) {
    menuItems[i].classList.remove("active");
  }
  e.target.classList.toggle("active");
});

// open sidebar
menuBtn.addEventListener("click", () => {
  sideMenu.style.display = "block";
});

// close sidebar
closeBtn.addEventListener("click", () => {
  sideMenu.style.display = "none";
});

// show orders
orders.forEach((order) => {
  const tr = document.createElement("tr");
  const trContent = `<td>${order.productName}</td>
                    <td>${order.productNumber} </td>
                    <td class=${
                      order.shipping === "Decliend"
                        ? "danger"
                        : order.shipping === "Pending"
                        ? "warning"
                        : "primary"
                    } >${order.paymentStatus} </td>
                    <td class="warning">${order.shipping} </td>
                    <td class="primary">Details</td>`;
  tr.innerHTML = trContent;
  document.querySelector("table tbody").appendChild(tr);
});
