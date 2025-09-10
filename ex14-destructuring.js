const user = {
  name: "Phát",
  age: 22,
  address: {
    city: "HCM",
    district: "1"
  }
};

let { name, address } = user;

console.log(`Name: ${name}, City: ${address.city}`);