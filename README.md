
# Personal Finance Tracker - Stage 2

A comprehensive web application for tracking personal finances with transaction categorization, visualization, and dashboard analytics.

## Features

### Core Features
- **All Stage 1 Features**
  - Transaction management (add/edit/delete)
  - Transaction list view
  - Monthly expenses chart
  - Form validation

### New Features
- **Transaction Categories**
  - Predefined categories for transactions
  - Visual category indicators with color coding
  - Category filtering and organization

- **Enhanced Visualization**
  - Category-wise pie chart
  - Interactive legends and tooltips
  - Color-coded category representation

- **Dashboard**
  - Summary cards with key financial metrics
  - Total expenses overview
  - Category breakdown
  - Most recent transactions
  - Average transaction amount

## Tech Stack

- **Frontend**
  - Next.js 
  - React 
  - TypeScript
  - Tailwind CSS
  - shadcn/ui components
  - Recharts for data visualization

- **Backend**
  - Next.js API routes
  - MongoDB for data storage

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/SVPraveen1/finance_app-stage2.git
   cd finance-tracker-stage2

2. Install dependencies:

    ```shellscript
    npm install
    ```


3. Create a `.env.local` file in the root directory with your MongoDB connection string:

    ```plaintext
    MONGODB_URI=your_mongodb_connection_string
    ```


4. Run the development server:

    ```shellscript
    npm run dev
    ```


5. Open [http://localhost:3000](http://localhost:3000) in your browser.


## Usage Guide

### Adding a Transaction

1. Navigate to the "Transactions" tab
2. Fill in the amount, date, and description in the form
3. Click "Add Transaction"
4. The new transaction will appear in the transaction list


### Editing a Transaction

1. Find the transaction you want to edit in the list
2. Click the edit (pencil) icon
3. Modify the details in the form
4. Click "Save Changes"


### Deleting a Transaction

1. Find the transaction you want to delete in the list
2. Click the delete (trash) icon
3. Confirm the deletion in the dialog


### Viewing Monthly Expenses

1. Navigate to the "Monthly Chart" tab
2. The chart displays your daily expenses for the current month
3. Hover over bars to see detailed information


## Project Structure

```plaintext
finance-tracker-stage1/
├── app/
│   ├── api/
│   │   └── transactions/
│   │       ├── [id]/
│   │       │   └── route.ts
│   │       └── route.ts
│   ├── page.tsx
│   └── layout.tsx
├── components/
│   ├── transaction-form.tsx
│   ├── transaction-list.tsx
│   ├── transaction-edit-form.tsx
│   └── expenses-chart.tsx
├── lib/
│   ├── mongodb.ts
│   ├── types.ts
│   └── utils.ts
└── public/
```

## API Endpoints

### Transactions

- `GET /api/transactions` - Get all transactions
- `POST /api/transactions` - Create a new transaction
- `PUT /api/transactions/[id]` - Update a transaction
- `DELETE /api/transactions/[id]` - Delete a transaction




## Predefined Categories

The application comes with the following predefined categories:

- Housing
- Transportation
- Food & Dining
- Utilities
- Insurance
- Healthcare
- Savings & Investments
- Personal Spending
- Entertainment
- Education
- Debt Payments
- Gifts & Donations
- Other


You can customize these categories by modifying the `CATEGORIES` array in `lib/constants.ts`.




## Customization

### Chart Customization

- Edit the `expenses-chart.tsx` file to customize the chart appearance
- Modify the colors, labels, and tooltips as needed

### Adding New Categories

1. Open `lib/constants.ts`
2. Add new categories to the `CATEGORIES` array:

```typescript
export const CATEGORIES = [
  // Existing categories
  { value: "new-category", label: "New Category" },
]
```


3. Add a color for the new category in `lib/utils.ts`:

```typescript
export function getCategoryColor(category: string): string {
  const categoryColors: { [key: string]: string } = {
    // Existing categories
    "new-category": "bg-cyan-100 text-cyan-800 border-cyan-200",
  }
  // ...
}
```

## Deployment

### Deploying to Vercel

1. Push your code to a GitHub repository
2. Connect your repository to Vercel
3. Add the `MONGODB_URI` environment variable in the Vercel project settings
4. Deploy the project


## Acknowledgments

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Recharts](https://recharts.org/)
- [MongoDB](https://www.mongodb.com/)
