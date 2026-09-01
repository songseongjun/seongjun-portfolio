"use client";

import { createContext, useContext, useState } from "react";

const ModalContext = createContext({
  modalOpen: false,
  setModalOpen: () => {},
});

export function ModalProvider({ children }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
      <ModalContext.Provider value={{ modalOpen, setModalOpen }}>
        {children}
      </ModalContext.Provider>
  );
}

export const useModal = () => useContext(ModalContext);