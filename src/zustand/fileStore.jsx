import {create } from 'zustand';

const useFileStore = create((set) => ({
  files: [],
  addFile: (file) => set((state) => ({ files: [...state.files, file] })),
}));

export default useFileStore;