    // lib/signupSlice.ts

    import { createSlice, PayloadAction } from '@reduxjs/toolkit';
    import { AppDispatch } from './store';
    import { SIGNUP_URL } from './apiConfig'; // Import SIGNUP_URL from apiConfig

    // Define your Signup State interface
    interface SignupState {
    isSigningUp: boolean;
    signUpError: string | null;
    }

    // Initial State for Signup Slice
    const initialState: SignupState = {
    isSigningUp: false,
    signUpError: null,
    };

    // Create Signup Slice
    const signupSlice = createSlice({
    name: 'signup',
    initialState,
    reducers: {
        signupStart(state) {
        state.isSigningUp = true;
        state.signUpError = null;
        },
        signupSuccess(state) {
        state.isSigningUp = false;
        state.signUpError = null;
        },
        signupFailure(state, action: PayloadAction<string>) {
        state.isSigningUp = false;
        state.signUpError = action.payload;
        },
    },
    });

    // Extract action creators from slice
    export const { signupStart, signupSuccess, signupFailure } = signupSlice.actions;

    // Async action creator for signup
    export const signup = (
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    confirmPassword: string,
    password: string,
    ) => async (dispatch: AppDispatch) => {
    try {
        dispatch(signupStart()); // Dispatch signup start action

        // Example of API call using fetch
        const response = await fetch(SIGNUP_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            firstName,
            lastName,
            phoneNumber,
            email,
            confirmPassword,
            password,
        }),
        });

        if (!response.ok) {
        // Handle non-success responses
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to signup');
        }

        // If response is successful, dispatch signup success action
        dispatch(signupSuccess());
    } catch (error: unknown) {
        // Dispatch signup failure action with error message
        dispatch(signupFailure((error as Error).message));
    }
    };

    // Export default reducer from slice
    export default signupSlice.reducer;
