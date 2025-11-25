import { food_items } from "@/lib/food";
import { createContext, useState } from "react";

export const UserContext = createContext();

export const ContextProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = food_items.filter((item) => {
    const name = item.food_name.toLowerCase().trim();
    const search = input.toLowerCase().trim();

    const matchesSearch = name.includes(search); // always true
    const matchesCategory =
    category === "All" ? true : item.food_category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <UserContext.Provider value={{ setInput, setCategory, filtered , category}}>
      {children}
    </UserContext.Provider>
  );
};
