export default function Fruits() {
  const Fruits = [
    { name: "Apple", price: 500, emoji: "🍎" },
    { name: "Banana", price: 450, emoji: "🍌" },
    { name: "Mango", price: 200, emoji: "🥭" },
    { name: "Watermelon", price: 1000, emoji: "🍉" },
    { name: "Pineapple", price: 800, emoji: "🍍" },
  ];

  console.log(Fruits);
  return (
    <ul>
      {Fruits.map((Fruits) => (
        <li key={Fruits.name}>
          {Fruits.emoji} {Fruits.name} ₦{Fruits.price}
        </li>
      ))}
    </ul>
  );
}
