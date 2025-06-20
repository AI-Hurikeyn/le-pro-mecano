# 🚗 Le Pro Mecano - Car Mechanic Shop Application

A full-stack web application for a car mechanic shop with appointment booking, user authentication, and multilingual support.

## 🌟 Features

- **Frontend (React + TypeScript + Vite)**
  - Modern, responsive UI with Tailwind CSS
  - Multilingual support (French, Arabic, English)
  - User authentication and email verification
  - Interactive appointment booking
  - Service showcase with animations
  - Mobile-friendly design

- **Backend (Node.js + Express + TypeScript)**
  - RESTful API with Express.js
  - User authentication and authorization
  - Email verification system
  - Database integration with Prisma ORM
  - CORS enabled for frontend integration

- **Database**
  - SQLite database with Prisma ORM
  - User management
  - Appointment tracking
  - Data migrations

## 🛠️ Tech Stack

### Frontend
- React 19
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion (animations)
- React Router
- i18next (internationalization)
- Lucide React (icons)

### Backend
- Node.js
- Express.js
- TypeScript
- Prisma ORM
- SQLite
- Nodemailer (email service)
- CORS

## 📁 Project Structure

```
car-mechanic-shop-app/
├── frontend/           # React frontend application
│   ├── src/
│   │   ├── components/ # Reusable React components
│   │   ├── pages/      # Page components
│   │   ├── api/        # API integration
│   │   ├── locales/    # Translation files
│   │   └── styles/     # CSS and styling
│   └── public/         # Static assets
├── backend/            # Node.js backend API
│   ├── src/
│   │   ├── application/ # Use cases and services
│   │   ├── domain/     # Domain entities
│   │   ├── infrastructure/ # External services
│   │   ├── interfaces/ # Controllers and routes
│   │   └── main/       # Server configuration
│   └── prisma/         # Database schema and migrations
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/le-pro-mecano.git
   cd le-pro-mecano
   ```

2. **Install backend dependencies**
   ```bash
   cd car-mechanic-shop-app/backend
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Set up environment variables**
   
   Create `.env` file in the backend directory:
   ```env
   NODE_ENV=development
   PORT=5000
   DATABASE_URL="file:./dev.db"
   EMAIL_HOST=your-smtp-host
   EMAIL_PORT=587
   EMAIL_USER=your-email@example.com
   EMAIL_PASS=your-email-password
   ```

5. **Set up the database**
   ```bash
   cd car-mechanic-shop-app/backend
   npx prisma generate
   npx prisma db push
   ```

### Running the Application

1. **Start the backend server**
   ```bash
   cd car-mechanic-shop-app/backend
   npm run dev
   ```

2. **Start the frontend development server**
   ```bash
   cd car-mechanic-shop-app/frontend
   npm run dev
   ```

3. **Access the application**
   - Frontend: http://localhost:4000
   - Backend API: http://localhost:5000

## 🌐 API Routes

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/verify-email` - Email verification

### Appointments
- `GET /api/appointments` - Get all appointments
- `POST /api/appointments` - Create new appointment
- `PUT /api/appointments/:id` - Update appointment
- `DELETE /api/appointments/:id` - Delete appointment

## 🎨 Features Showcase

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Multilingual Support**: Available in French, Arabic, and English
- **Modern Animations**: Smooth transitions and hover effects
- **Email Verification**: Secure user registration process
- **Professional UI**: Clean, modern interface with Tailwind CSS

## 🧪 Testing

```bash
# Run backend tests
cd car-mechanic-shop-app/backend
npm test

# Run frontend tests
cd car-mechanic-shop-app/frontend
npm test
```

## 📦 Building for Production

```bash
# Build backend
cd car-mechanic-shop-app/backend
npm run build

# Build frontend
cd car-mechanic-shop-app/frontend
npm run build
```

## 🚀 Deployment

The application can be deployed on various platforms:

- **Frontend**: Vercel, Netlify, or any static hosting service
- **Backend**: Heroku, Railway, DigitalOcean, or any Node.js hosting service
- **Database**: Can be migrated to PostgreSQL or MySQL for production

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- Website: [Le Pro Mecano](#)
- Email: contact@lepromecano.com
- Phone: +216 23 994 159

## 🙏 Acknowledgments

- React team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Prisma for the excellent ORM
- All contributors who help improve this project

---

Made with ❤️ by the Le Pro Mecano team
