import { StoreApi, UseBoundStore } from "zustand";

type WithSelectors<S> = S extends { getState: () => infer T }
    ? S & { use: { [K in keyof T]: () => T[K] } }
    : never;

// S'utilitza per a crear hooks automaticament per a cada camp del store
// Permet fer useUserStore.use.user() en lloc de useUserStore(state => state.user)
export const createSelectors = <S extends UseBoundStore<StoreApi<object>>>(
    _store: S // li passem el store de zustand
) => {
    // convertix el store a un store amb selectors, de forma que tindrà
    //  una propietat .use amb un hook per a cada camp del state
    const store = _store as WithSelectors<typeof _store>;
    store.use = {};
    for (const k of Object.keys(store.getState())) {
        (store.use as any)[k] = () => store((s) => s[k as keyof typeof s]);
    }

    return store;
};

export type { WithSelectors };