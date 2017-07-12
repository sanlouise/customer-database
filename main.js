const body = document.querySelector("body");
const title = document.createElement("h1");
const section = document.createElement("section");

title.textContent = "Internal Company Directory";
body.appendChild(title);
body.appendChild(section);

customers.results.forEach(customer => {
  // PARENT DIV
  const customerDiv = document.createElement("div");
  section.appendChild(customerDiv);

  // PICTURE
  const picture = document.createElement("img");
  picture.setAttribute("src", customer.picture["large"]);
  customerDiv.appendChild(picture);

  // NAME
  const name = document.createElement("h3");
  name.textContent = `${customer.name.first} ${customer.name
    .last} `.toUpperCase();
  customerDiv.appendChild(name);

  // EMAIL ADDRESS
  const email = document.createElement("h4");
  email.textContent = customer.email;
  customerDiv.appendChild(email);

  // ADDRESS
  const address = document.createElement("ul");
  const street = document.createElement("li");
  street.textContent = customer.location["street"];
  const state = document.createElement("li");
  state.textContent = customer.location["state"];
  const cityPostCode = document.createElement("li");
  cityPostCode.textContent = `${customer.location["city"]} ${customer
    .location["postcode"]}`;

  customerDiv.appendChild(address);
  address.appendChild(street);
  address.appendChild(cityPostCode);
  address.appendChild(state);

  // PHONE NUMBER
  const phone = document.createElement("p");
  phone.textContent = customer.cell;
  customerDiv.appendChild(phone);

  // SSN
  const ssn = document.createElement("span")
  ssn.textContent = customer.id["value"];
  customerDiv.appendChild(ssn);

  name.classList += "name";
  picture.classList += "picture";
  ssn.classList += "ssn";
  address.classList += "address";
  phone.classList += "phone";
  email.classList += "email";


});
