import { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [sepet, setSepet] = useState([]);

  const sepeteEkle = (product) => {
    const eskiSepet = [...sepet];
    const yeniSepet = eskiSepet.concat(product);

    setSepet(yeniSepet);
    console.log(sepet);
  };

  const sepettenCikar = (id) => {
    const eskiSepet = [...sepet];
    const urun = eskiSepet.find((urun) => urun.id === id);
    eskiSepet.splice(urun, 1);
    const yeniSepet = [...eskiSepet];

    setSepet(yeniSepet);
  };

  return (
    <AppContext.Provider value={{ sepet, sepeteEkle, sepettenCikar }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
