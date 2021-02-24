
const truncate = (str, num) => {
  if (num >= str.length) return str;
  if (num <= 3) return str.slice(0, num) + '...';
  return str.slice(0, num - 3) + '...';
}

console.log(
  truncate('Lorem ipsum dolor sit amet consectetur.', 10)
);
console.log(
  truncate('Lorem ipsum dolor sit amet consectetur.', 3)
);