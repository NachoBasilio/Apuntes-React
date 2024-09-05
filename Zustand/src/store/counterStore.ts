import { create } from "zustand";

interface Post {
  id: number;
  title: string;
  body: string;
}

interface CounterState {
  count: number;
  title: string;
  posts: Post[];
  increment: (value: number) => void;
  getPosts: () => Promise<void>;
}
/**
 * @description Este es un ejemplo de cómo se puede crear un store con Zustand.
 * @returns {CounterState} Retorna el estado del store.
 * 
 * @property {number} count El contador inicial.
 * @property {string} title El título del store.
 * @property {function} increment Incrementa el valor del contador.
 * @param {number} value El valor por el cual incrementar el contador.
 */
export const useCounterStore = create<CounterState>((set) => ({
  count: 10,
  title: "Counter Store",
  posts: [],
  increment: (value: number) => set(state => ({ count: state.count + value })),
  getPosts: async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    set((state => ({
      ...state,
      posts
    })));
  },
  clearStore: () => set({}, true)
}))


