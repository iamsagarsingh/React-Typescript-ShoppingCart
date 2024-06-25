# Shopping Cart App

A responsive and modern shopping cart application built using React, TypeScript,Tailwind CSS and Vite.

## Table of Contents

- [Features](#features)
- [Screenshots](#screenshots)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- Add items to the cart
- Remove items from the cart
- Update item quantities
- Persistent cart state using localStorage
- Responsive design with Tailwind CSS

## Installation

To get started with the project, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/shopping-cart-app.git
    cd shopping-cart-app
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Start the development server:**

    ```bash
    npm run dev
    ```

## Usage

1. **Running the app:**

    Once the development server is running, open your browser and navigate to `http://localhost:5173`.

2. **Building for production:**

    To create a production build, use:

    ```bash
    npm run build
    ```

## Folder Structure

```
React-Typescript-ShoppingCart/
my-react-app/
├── src/
│   ├── components/
│   │   ├── CartItem.tsx
│   │   ├── CartRender.tsx
│   │   ├── Navbar.tsx
│   │   ├── Slider.tsx
│   │   ├── TotalCart.tsx
│   ├── context/
│   │   ├── CartContext.tsx
│   ├── data/
│   │   ├── cartItems.ts
│   ├── hooks/
│   │   ├── useLocalStorage.ts
│   ├── pages/
│   │   ├── About.tsx
│   │   ├── Cart.tsx
│   │   ├── Error.tsx
│   │   ├── Home.tsx
│   ├── utilities/
│   │   ├── formatCurrency.ts
│   ├── App.css
│   ├── App.tsx
│   ├── main.tsx
└── package.json
```

## Contributing

Contributions are welcome! If you'd like to contribute to the project, please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add your feature'`)
5. Push to the branch (`git push origin feature/your-feature`)
6. Open a Pull Request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---
