import create from "zustand"

export const useList = create(
  set => ({
    list: [],
    add: item =>
      set(({ list }) => {
        const index = list.findIndex(c => c === item)
        if (index >= Number(0)) {
          return
        } else {
          list.push(item)
        }
      }),
  }),
  {
    name: "list",
  }
)
