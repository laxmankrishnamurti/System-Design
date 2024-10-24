# Micro-Frontend Architectue

1. **Split the entire frontend application into a seperate unit which has its own reponsibility to perform a specific task in the UI. Each micro-frontend owns a part of the user interface.**

   - Ex :- If we take an example of an e-commerce site then we can split the entire application based on their task such as :-

     - Signup/Signin
     - Manage user account details and updation
     - Cart
     - Product Listing
     - Product searching
     - Product recommendation
     - Checkout
     - Payment
     - .....etc

2. **Set-up environment with webpack which hepls of load the micro-frontend into the root application dynamically as an independent module. Yes, each micro-frontend will be loaded dynamically into the root application as a module and the feature is provided by the webpack.**

3. **Build the micro-frontend and write logics for inter-communication among all micro-frontend application**

   - Technology independent
   - Choose any state management way that suits the application

     **Typical folder structure of a micro-frontend application**

   -

   ````jsx
       / src
           // UI components
           - components
               - account
                   - AccountForm.tsx
                   - AccountDetails.tsx
               - ...etc

           // state with reducers
           - features
               - account
                   - accountSlice.ts
               - ...etc

           // Final UI
           - pages
               - AccountPage.tsx
               - ... etc

           // all backend requests
           - services/api calls
               - api.ts
               - account.ts

           // parent directory for managing all states
           - store
               - store.ts

           - App.tsx
           - index.tsx or main.tsx
           - types
               - index.types.ts

           // If error occurs within the component
           - ErrorBoundry.tsx

           // Utility components
           - utils/
            - Button.tsx
            - Spinner.tsx
            - ToastMessage.tsx
       ```

   ````

4. **Push the micro-frontend to the GitHub and linked with vercel, netlify, ....etc for hosting**

5. **How does a micro-frontend will communicate with other micro-frontends**

6. **Set-up the root application which loads and manage all micro-frontend applications dynamically**

   <code>Learn about the main component which is handling the entire micro-frontend application, is :- Webpack</code>
