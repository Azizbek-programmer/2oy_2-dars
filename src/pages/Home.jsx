import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ism: "",
      yosh: "",
      cards: [],
      editIndex: null,
    };
  }

  Handleqosh = (e) => {
    e.preventDefault();
    const { ism, yosh, cards, editIndex } = this.state;

    if (editIndex !== null) {
      const yangilangan = [...cards];
      yangilangan[editIndex] = { ...yangilangan[editIndex], ism, yosh };
      this.setState({ cards: yangilangan, editIndex: null });
    } else {
      const yangi = { id: Date.now(), ism, yosh };
      this.setState({ cards: [...cards, yangi] });
    }

    this.setState({ ism: "", yosh: "" });
  };

  ochirish = (index) => {
    this.setState((prev) => ({
      cards: prev.cards.filter((_, i) => i !== index),
    }));
  };

  tahrirlash = (index) => {
    const karta = this.state.cards[index];
    this.setState({ ism: karta.ism, yosh: karta.yosh, editIndex: index });
  };

  render() {
    const { ism, yosh, cards, editIndex } = this.state;

    return (
      <div className="bg-gray-100  py-[30px]">
        <div className="mx-auto px-[20px] w-[800px]">
          <h2 className="text-[22px] font-bold mb-[20px]">Karta yaratish</h2>

          <form onSubmit={this.Handleqosh} className="flex gap-[10px] mb-[30px]">
            <input
              value={ism}
              onChange={(e) => this.setState({ ism: e.target.value })}
              type="text"
              className="border px-[8px] py-[6px] rounded w-[200px]"
              placeholder="Ism"
            />
            <input
              value={yosh}
              onChange={(e) => this.setState({ yosh: e.target.value })}
              type="number"
              className="border px-[8px] py-[6px] rounded w-[120px]"
              placeholder="Yosh"
            />
            <button
              type="submit"
              className="border px-[16px] py-[6px] rounded bg-gray-200"
            >
              {editIndex !== null ? "Yangilash" : "Qo‘shish"}
            </button>
          </form>

          <h2 className="text-[18px] font-bold mb-[15px]">Barcha cards</h2>
          <div className="flex flex-wrap gap-[15px]">
            {cards.map((karta, index) => (
              <div
                key={karta.id}
                className="border p-[15px] rounded bg-white w-[180px]"
              >
                <h3 className="font-semibold text-[16px] mb-[8px]">{karta.ism}</h3>
                <p className="text-[14px] text-gray-600 mb-[10px]">{karta.yosh}</p>
                <div className="flex gap-[10px]">
                  <button
                    onClick={() => this.ochirish(index)}
                    className="text-red-600 text-[13px]"
                  >
                    delete
                  </button>
                  <button
                    onClick={() => this.tahrirlash(index)}
                    className="text-blue-600 text-[13px]"
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
  }
}

export default Home;
