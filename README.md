
# Start
yarn start

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







# Learning

Higher-Order Components (HOCs) เป็นรูปแบบการเขียนโค้ดที่นำมาใช้ใน React และมีหน้าที่ทำงานเพื่อแก้ปัญหาบางประการหรือเพิ่มความสามารถให้กับ Component อื่นๆ. นี่คือบางเรื่องที่ HOCs มักจะถูกใช้:

HOCs || Context -->การจัดการ State: HOCs สามารถใช้เพื่อแชร์ state ระหว่าง Component หลายๆ ตัว หรือเพื่อทำความสะดวกในการจัดการ state ที่ซับซ้อน.

HOCs --> การจัดการ Side Effects: HOCs สามารถใช้เพื่อจัดการกับ side effects เช่นการโต้ตอบกับ API calls, การจัดการกับการล็อกอิน, หรือการจัดการกับการเปลี่ยนแปลง state ที่มีผลต่อ UI.

Context --> การจัดการ Props: HOCs สามารถใช้เพื่อแก้ปัญหา prop drilling (การส่ง props ลึกไปใน Component) โดยการเพิ่มหรือปรับ props ในทุกๆ Component ที่เข้าถึง. 

HOCs --> การทำความสะดวกในการทดสอบ (Testing Convenience): HOCs สามารถใช้เพื่อให้การทดสอบของคุณง่ายขึ้น, เช่น การ mock หรือเปลี่ยน Component ที่ถูกล้อมรอบในระหว่างการทดสอบ.

HOCs --> การทำ Logging และ Monitoring: HOCs สามารถใช้เพื่อบันทึกข้อมูลหรือตรวจสอบการทำงานของ Component ต่างๆ ในแอปพลิเคชัน.

Context --> การจัดการ Authentication และ Authorization: HOCs สามารถใช้เพื่อจัดการกับการรับรองตัวตนและการตรวจสอบสิทธิ์ใน Component.

HOCs --> การจัดการ Authorization: HOCs สามารถใช้เพื่อจัดการตรวจสอบสิทธิ์ใน Component.

HOCs --> การจัดการการ Navigate (Routing): HOCs สามารถใช้เพื่อจัดการการ navigate ระหว่างหน้า Component หรือการจัดการ route.

การใช้ HOCs อย่างมีประสิทธิภาพควรพิจารณาให้ดีว่ามีความจำเป็นหรือไม่ต่อการใช้, โดยมีการใช้ Hook และ Render Props ในกรณีที่ง่ายและเหมาะสมก็เป็นทางเลือกที่ดี. การเลือกใช้ HOCs หรือรูปแบบอื่นๆ ขึ้นอยู่กับความคิดสร้างสรรค์และลักษณะของโปรเจ็กต์.