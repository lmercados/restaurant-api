const menu = require("../data/menu");

const resolvers = {
  Query: {
    categories: () => {
      // Map `category` to `name`
      return menu.map((category) => ({
        name: category.category, // Map `category` key to `name`
        items: category.items,
      }));
    },
    menuItems: (_, args) => {
      if (args.category) {
        const category = menu.find((cat) => cat.category === args.category);
        return category ? category.items : [];
      }
      return menu.flatMap((cat) => cat.items);
    },
    menu: () => {
      // Map `category` to `name` for the full menu
      return menu.map((category) => ({
        name: category.category, // Map `category` key to `name`
        items: category.items,
      }));
    },
  },
};

module.exports = resolvers;
