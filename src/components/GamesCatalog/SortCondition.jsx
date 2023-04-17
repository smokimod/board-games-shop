export const SortCondition = (data, category) => {
  if (category === "lowtohigh") {
    data.games.sort((a, b) => {
      return a.price - b.price;
    });
  }
  if (category === "hightolow") {
    data.games.sort((a, b) => {
      return b.price - a.price;
    });
  }
  if (category === "rating") {
    data.games.sort((a, b) => {
      return a.rank - b.rank;
    });
  }
  if (category === "hightime") {
    data.games.sort((a, b) => {
      return b.min_playtime - a.min_playtime;
    });
  }
  if (category === "lowtime") {
    data.games.sort((a, b) => {
      return a.min_playtime - b.min_playtime;
    });
  }
};
