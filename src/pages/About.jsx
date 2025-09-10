import { useState } from "react";

const About = () => {
  const [ism, setIsm] = useState("");
  const [yosh, setYosh] = useState("");
  const [cards, setCards] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const Handleqosh = (e) => {
    e.preventDefault();

    if (editIndex !== null) {
      const yangilangan = [...cards];
      yangilangan[editIndex] = { ...yangilangan[editIndex], ism, yosh };
      setCards(yangilangan);
      setEditIndex(null);
    } else {
      const yangi = { 
        id: Date.now(), 
        ism, 
        yosh 
      };
      setCards([...cards, yangi]);
    }
    setIsm("");
    setYosh("");
  };

  const ochirish = (index) => {
    setCards(cards.filter((_, i) => i !== index));
  };

  const tahrirlash = (index) => {
    setIsm(cards[index].ism);
    setYosh(cards[index].yosh);
    setEditIndex(index);
  };

  return (
    <div className="bg-gray-100 min-h-screen py-6">
      <div className="container mx-auto px-4">
        <h2 className="text-xl font-bold mb-4">Karta yaratish</h2>

        <form onSubmit={Handleqosh} className="flex gap-2 mb-6">
          <input
            value={ism}
            onChange={(e) => setIsm(e.target.value)}
            type="text"
            className="border px-2 py-1 rounded w-1/3"
            placeholder="Ism"
          />
          <input
            value={yosh}
            onChange={(e) => setYosh(e.target.value)}
            type="number"
            className="border px-2 py-1 rounded w-1/3"
            placeholder="yosh "
          />
          <button
            type="submit"
            className="border px-4 py-1 rounded bg-gray-200"
          >
            {editIndex !== null ? "Yangilash" : "Qoshish"}
          </button>
        </form>

        <h2 className="text-lg font-bold mb-3">Barcha cards</h2>
        <div className="grid grid-cols-5 gap-4">
          {cards.map((karta, index) => (
            <div
              key={karta.id}
              className="border p-4 rounded bg-white"
            >
              <h3 className="font-semibold">{karta.ism}</h3>
              <p className="text-sm text-gray-600 mb-2">{karta.yosh}</p>
              <div className="flex gap-2">
                <button
                  onClick={() => ochirish(index)}
                  className="text-red-600 text-sm"
                >
                  delete
                </button>
                <button
                  onClick={() => tahrirlash(index)}
                  className="text-blue-600 text-sm"
                >
                  edit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
