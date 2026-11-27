type Product = { 
  name: string; 
  price: number; // 'Number' ki jagah lowercase 'number' use karein
};

const value: Product = { 
  name: "rohit", 
  price: 300 
};

// 1. Parameter (item: Product) receive karein
const val = function(item: Product) { 
  const getDisCount = item.price * 0.2; 
  return getDisCount; 
};

console.log(val(value)); 
