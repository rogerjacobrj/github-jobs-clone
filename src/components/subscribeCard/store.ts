interface LocalState {
    value: string;
    showModal: boolean;
    error: boolean,
    message: string;
    isValid: boolean;
}

type Actions =
    | {
        type: "SET_VALUE";
        field: string;
        value: string | boolean | number;
    } | {
        type: "RESET";
    };

export const initialState: LocalState = {
    value: "",
    showModal: false,
    error: false,
    message: "",
    isValid: false
};

export const reducer = (state: LocalState, action: Actions) => {
    switch (action.type) {
        case "SET_VALUE":
            return { ...state, [action.field]: action.value };

        case "RESET":
            return {
                value: "",
                showModal: false,
                error: false,
                message: "",
                isValid: false
            }

        default:
            return state;
    }
};