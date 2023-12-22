
# Start
npm run dev

# folders structure
src/
├── features/       // Grouping features of the application
│   ├── news-feed/        // Folder for the News Feed feature
│   │   ├── components/   // Components related to the News Feed
│   │   ├── containers/   // Containers or pages related to the News Feed
│   │   │   ├── news-feed-page/                // Folder for the News Feed page container
│   │   │   │   ├── NewsFeedPage.jsx         // Container component for the News Feed page
│   │   │   │   ├── NewsFeedPageStyles.css   // Styles specific to the News Feed page
│   │   │   │   ├── NewsFeedPageUtils.js     // Utility functions specific to the News Feed page
│   │   │   │   ├── useNewsFeedPage.js       // Custom hook for managing News Feed data, events and callbacks
│   │   │   │   └── ...                      // Additional files related to the News Feed page
│   │   │   └── ...
│   │   ├── services/     // Services or API calls specific to the News Feed
│   │   ├── utils/        // Utility functions specific to the News Feed
│   │   ├── slices/       // Redux Slices to manage states specific to the News Feed
│   │   └── ...           // Additional other folders
│   └── ...               // Additional feature folders
├── shared/         // Shared elements used across multiple features
│   ├── components/ // Reusable components
│   ├── services/   // Shared services or API calls
│   ├── hooks/      // Custom hooks
│   ├── hoc/        // Higher-order components
│   ├── test/       // test management
│   ├── config/     // Storing config
│   ├── constants/  // Storing constants
│   ├── contexts/   // Contexts management
│   ├── hooks/      // Hooks management
│   ├── routes/     // Routes management
│   ├── types/      // Storing types
│   └── utils/      // Utility functions
├── assets/         // Storing static assets
│   ├── images/     // Storing image files
│   ├── fonts/      // Storing font files
│   └── ...
├── styles/         // Global styles
│   └── ...
├── App.jsx         // Entry point of the application
└── ...             // Other necessary files and folders