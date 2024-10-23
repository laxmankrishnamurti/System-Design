# Micro-Frontend Architectue

1 **Split the entire frontend application into a seperate unit which has its own reponsibility to perform a specific task in the UI. Each micro-frontend owns a part of the user interface.**

Ex :- If we take an example of an e-commerce site then we can split the entire application based on the task such as :-

- Create an user account and handle login
- Manage user account details and updation
- Cart
- Product Listing
- Product searching
- Product recommendation
- Checkout
- Payment
- .....etc

2. **Set-up environment with webpack which hepls of load the micro-frontend into the root application dynamically**

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

           // parent file for managing all states
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

4. **Push it to the GitHub and linked with vercel, netlify, ....etc**

5. **Set-up the root application which loads and manage all micro-frontend application**

6. **Take care of tokens and network related stuffs.**

<code>Learn about the main component which is handling the entire micro-frontend application, is :- Webpack</code>
