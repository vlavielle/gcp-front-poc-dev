import { create } from "zustand";

export interface LoginFormState {
    show: boolean;
    setShow: () => void;
}

export const useLoginForm = create<LoginFormState>()((set) =>({
    show: false,
    setShow: () => set(state => ({ show: !state.show })),    
}))