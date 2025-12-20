# Bright Future - Online Learning Platform 🎓

A modern, responsive e-learning platform built with HTML, CSS, and JavaScript. This platform allows users to browse courses, enroll in them, track their progress, and watch video lessons.

![Bright Future Platform](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

## ✨ Features

### 🏠 Home Page
- Responsive navigation with mobile menu
- Hero banner with search functionality
- Course catalog with 6 courses
- Service highlights (Flexible Timing, Expert Teachers, 24/7 Support)
- Course categories (Design, Development, Marketing, Photography)
- Partner logos carousel
- Customer testimonials slider
- Newsletter subscription

### 👤 User Authentication
- Login system integrated with DummyJSON API
- Local storage for user session management
- Pre-configured test accounts for demo
- User profile display with avatar

### 📚 Course Management
- Browse all available courses
- View enrolled courses separately
- One-click enrollment system
- Course removal functionality
- Real-time course count updates

### 🎥 Interactive Course Viewer
- YouTube video integration
- Sidebar with complete lesson list
- Progress tracking (percentage and completion count)
- Mark lessons as complete
- Navigate between lessons (Previous/Next)
- Lesson metadata (instructor, duration, resources)
- Collapsible sidebar for better viewing experience
- Progress saved per user per course

### 💾 Data Persistence
- User authentication state
- Enrolled courses per user
- Course completion progress
- All data stored in browser's localStorage

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional but recommended)

### Installation

1. **Clone the repository**
   1- Open Github Disktop
   2- Clone repository by URL: https://github.com/yusufshebl/FInal-Lab-Web-Dev-Project.git

2. **Project Structure**
   ```
   bright-future/
   ├── index.html              # Main landing page
   ├── style.css               # Main stylesheet
   ├── script.js               # Main JavaScript file
   ├── html/
   │   ├── contact.html        # Contact form page
   │   ├── login.html          # Login page
   │   ├── my-courses.html     # User's course dashboard
   │   └── course-viewer.html  # Video lesson viewer
   ├── css/
   │   ├── login-style.css
   │   ├── mycourses-style.css
   │   └── courseviewer-style.css
   ├── js/
   │   ├── login-script.js
   │   ├── mycourses-script.js
   │   └── courseviewer-script.js
   └── images/
       ├── home/
       ├── courses/
       ├── teachers/
       ├── testimonials/
       └── brand-logos/
   ```

3. **Run the Application**

   **Direct file opening**
   - Simply open `index.html` in your browser
   - Note: Open index.html With live server extension

## 🎯 Usage

### For Students

1. **Browse Courses**
   - Visit the homepage to see all available courses
   - View course details including ratings, student count, and videos

2. **Create an Account / Login**
   - Click "Login / Logout" in the navigation
   - Use one of the test accounts or login with DummyJSON credentials:
     - **Username**: `emilys` | **Password**: `emilyspass`
     - **Username**: `michaelw` | **Password**: `michaelwpass`
     - **Username**: `sophiab` | **Password**: `sophiabpass`

3. **Enroll in Courses**
   - After logging in, click "Enroll Now" on any course
   - View your enrolled courses in "My Courses" section

4. **Start Learning**
   - Click "Start Learning" on an enrolled course
   - Watch video lessons
   - Mark lessons as complete
   - Track your progress

### For Instructors

1. **Become an Instructor**
   - Scroll to the "Become an instructor" section
   - Click "Contact with us"
   - Fill out the contact form

## 🎨 Courses Available

1. **Learn HTML & CSS** (Development)
   - 5 video lessons
   - 1400+ students enrolled
   - Rating: 3.7/5

2. **Learn JavaScript** (Development)
   - 4 video lessons
   - 1200+ students enrolled
   - Rating: 4.1/5

3. **Modern JavaScript: ES6 and beyond** (Development)
   - 4 video lessons
   - 1650+ students enrolled
   - Rating: 4.2/5

4. **Introduction to the Internet of Things** (IoT)
   - 4 video lessons
   - 1100+ students enrolled
   - Rating: 3.6/5

5. **Developing Mobile IoT Application** (IoT & Development)
   - 4 video lessons
   - 2200+ students enrolled
   - Rating: 4.6/5

6. **IoT Applications Development using MasterOfThings** (Development)
   - 4 video lessons
   - 2250+ students enrolled
   - Rating: 4.8/5

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Libraries**:
  - [jQuery 3.7.0](https://jquery.com/) - DOM manipulation
  - [Owl Carousel 2.3.4](https://owlcarousel2.github.io/OwlCarousel2/) - Sliders/Carousels
  - [Font Awesome 6.1.1](https://fontawesome.com/) - Icons
- **API**: 
  - [DummyJSON](https://dummyjson.com/) - Authentication
  - [Formspree](https://formspree.io/) - Contact form submissions
- **Video Hosting**: YouTube embedded videos
- **Storage**: Browser localStorage

## 📱 Responsive Design

The platform is fully responsive and works seamlessly on:
- 📱 Mobile devices (320px and up)
- 📱 Tablets (768px and up)
- 💻 Desktops (1024px and up)
- 🖥️ Large screens (1920px and up)

## 🔒 Security & Privacy

- User passwords are handled by DummyJSON API
- Session data stored locally in browser
- No sensitive data transmitted over unsecured connections
- Form submissions handled via Formspree

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

**IMYAH Team**
- Ibrahim Saad Ibrahim El-Desouky
- Mohamed Ahmed Shafik Hussein
- Youssef Ibrahim Ramadan
- Youssef Shebl Mohamed Tolba
- Ahmed Hossam El-Din Nazmy
- Hossam Bashir Hamdy Abdullah

## 🙏 Acknowledgments

- Course content and video tutorials from various open-source providers
- Icons by Font Awesome
- Demo user data from DummyJSON
- Inspiration from modern e-learning platforms

## 🐛 Known Issues

- localStorage has browser limitations (typically 5-10MB)
- Video playback requires internet connection
- Some features require cookies/localStorage to be enabled

## 🔮 Future Enhancements

- [ ] User registration system
- [ ] Course creation interface for instructors
- [ ] Certificate generation upon course completion
- [ ] Discussion forums for each course
- [ ] Quiz and assessment features
- [ ] Payment gateway integration for premium courses
- [ ] Backend database integration
- [ ] Email notifications
- [ ] Social media sharing
- [ ] Advanced search and filtering

---

**Made with ❤️ by IMYAH Team**

If you find this project helpful, please give it a ⭐!
