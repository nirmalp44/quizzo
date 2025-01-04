import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the state structure for authentication
interface AuthState {
    isAuthenticated: boolean;
    isLoading: boolean;
    errorMessage: string;
    user: {
        name: string | null;
        email: string | null;
        password: string | null;
    };
}

// Define the initial state
const initialState: AuthState = {
    isAuthenticated: false,
    isLoading: false,
    errorMessage: "",
    user: {
        name: null,
        email: null,
        password: null,
    },
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        // Action for user sign-up
        userSignUp: (state, action: PayloadAction<{ name: string; email: string; password: string }>) => {
            state.isLoading = true;
            // Save user details for sign-up
            state.user = {
                name: action.payload.name,
                email: action.payload.email,
                password: action.payload.password,
            };
            console.log("User signed up:", state.user);
            state.isLoading = false;
            state.errorMessage = ""; // Clear error message on successful sign-up
        },
        // Action for user login
        login: (state, action: PayloadAction<{ email: string; password: string }>) => {
            state.isLoading = true;
            // Check if the entered email and password match the saved details
            if (state.user.email === action.payload.email && state.user.password === action.payload.password) {

                console.log("User logged in:", state.user);
                state.isAuthenticated = true;
                state.errorMessage = "";
            } else {
                state.isAuthenticated = false;
                state.errorMessage = "Login failed: Incorrect email or password.";
            }
            state.isLoading = false;
        },
        // Action for user logout
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = {
                name: null,
                email: null,
                password: null,
            };
        },
    },
});

// Export actions
export const { userSignUp, login, logout } = authSlice.actions;

// Export the reducer to be included in the store
export default authSlice.reducer;
