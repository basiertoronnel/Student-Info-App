# Student Info App - Vue 3 Application

A modern student management system built with **Vue 3**, **Vue Router**, and **Axios** demonstrating component-based architecture, state management, client-side routing, and API integration.

## 📋 Project Requirements Fulfilled

### Part A – Project Setup (10 pts) ✅
- ✅ Created using **Vue 3** framework with Vite
- ✅ Runs successfully in browser at `http://localhost:3000`
- ✅ Proper folder structure organized by feature

### Part B – Components & Props (15 pts) ✅
- ✅ **HeaderComponent**: Reusable header with props
- ✅ **StudentComponent**: Student card with interactive features
- ✅ **Props**: name, course, year, studentId passed from parent
- ✅ **State management**: Click counter, loading state, API data
- ✅ **Event handler**: "View Details" button with click tracking

### Part C – Routing (10 pts) ✅
- ✅ **Vue Router** implementation
- ✅ Two pages with client-side routing:
  - **Home** (`/`) - Welcome page
  - **Students** (`/students`) - Student directory
- ✅ Navigation links with active state

### Part D – API Integration (10 pts) ✅
- ✅ **Axios** for HTTP requests
- ✅ Fetches from **JSONPlaceholder API**
- ✅ **Loading state**: Spinner animation
- ✅ **Error handling**: Error message with retry functionality

## 🏗️ Project Structure

```
student-info-app/
├── public/
├── src/
│   ├── assets/
│   │   └── style.css          # Global styles
│   ├── components/
│   │   ├── HeaderComponent.vue    # Header component
│   │   └── StudentComponent.vue   # Student card component
│   ├── pages/
│   │   ├── Home.vue              # Home page
│   │   └── Students.vue          # Students page with API
│   ├── router/
│   │   └── index.js              # Vue Router configuration
│   ├── App.vue                   # Root component
│   └── main.js                   # Application entry point
├── index.html                    # HTML entry
├── package.json                  # Dependencies
├── vite.config.js               # Vite configuration
└── README.md                     # Documentation
```

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation Steps

1. **Navigate to project directory:**
   ```bash
   cd student-info-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   ```
   http://localhost:3000
   ```

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

## 📦 Dependencies

```json
{
  "dependencies": {
    "vue": "^3.4.0",
    "vue-router": "^4.2.0",
    "axios": "^1.6.0"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^5.0.0",
    "vite": "^5.0.0"
  }
}
```

## 🎯 Features

### 1. Component Architecture
- **HeaderComponent.vue**: Displays app title and subtitle
  - Props: `title` (required), `subtitle` (optional)
  - Fully reusable across different views

- **StudentComponent.vue**: Interactive student card
  - Props: `name`, `course`, `year`, `studentId`
  - State: `clickCount` for tracking interactions
  - Event: `handleClick()` method displays student details

### 2. Pages

#### Home Page (`/`)
- Welcome message
- Feature highlights
- Responsive card layout

#### Students Page (`/students`)
- **Local Students**: 3 hardcoded student records
- **API Students**: Fetched from JSONPlaceholder
- Real-time data loading
- Error handling with retry

### 3. Vue Router Implementation
- Hash-based routing with `createWebHistory()`
- Two routes configured:
  - `/` → Home component
  - `/students` → Students component
- Active link highlighting with `.router-link-active`
- Navigation via `<router-link>` components

### 4. State Management
- Component-level state using `data()`
- Props for parent-child communication
- Reactive updates with Vue's reactivity system

### 5. API Integration (Axios)
- **Endpoint**: `https://jsonplaceholder.typicode.com/users`
- **Method**: GET request
- **Data displayed**:
  - Name
  - Email
  - Username
  - City
  - Company

#### API States:
1. **Loading**: Shows spinner and message
2. **Success**: Displays user cards in grid
3. **Error**: Shows error message with retry button

### 6. Event Handling
- Click events on student cards
- Button click tracking
- Alert dialogs for user feedback
- Navigation click events

## 🎨 Styling Features

- CSS3 gradients and animations
- Responsive grid layouts
- Hover effects and transitions
- Mobile-first design
- Scoped component styles
- Global CSS variables

## 💡 Code Highlights

### Component Communication (Props)
```vue
<!-- Parent (Students.vue) -->
<StudentComponent
  :name="student.name"
  :course="student.course"
  :year="student.year"
  :student-id="student.id"
/>

<!-- Child (StudentComponent.vue) -->
props: {
  name: { type: String, required: true },
  course: { type: String, required: true },
  year: { type: String, required: true },
  studentId: { type: Number, required: true }
}
```

### State Management
```javascript
data() {
  return {
    clickCount: 0,
    apiStudents: [],
    loading: false,
    error: null
  }
}
```

### API Call with Axios
```javascript
async fetchStudents() {
  this.loading = true
  this.error = null
  
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    this.apiStudents = response.data
  } catch (err) {
    this.error = `Failed to fetch: ${err.message}`
  } finally {
    this.loading = false
  }
}
```

### Vue Router Configuration
```javascript
const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/students', name: 'Students', component: Students }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
```

## 📱 Responsive Design

- **Desktop**: Multi-column grid layout
- **Tablet**: 2-column layout
- **Mobile**: Single column stack
- Breakpoint: 768px

## 🔧 Configuration Files

### vite.config.js
```javascript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: { port: 3000 }
})
```

### package.json
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

## 🧪 Testing the Application

1. **Test Routing**: Click between Home and Students links
2. **Test Props**: Verify student data displays correctly
3. **Test State**: Click "View Details" to see counter increment
4. **Test API**: Navigate to Students page, watch loading state
5. **Test Error Handling**: Disconnect internet and click retry

## 🌟 Learning Outcomes

This project demonstrates:
- ✅ Vue 3 Composition and Options API
- ✅ Single File Components (SFC)
- ✅ Component communication via props
- ✅ Reactive state management
- ✅ Vue Router for SPA routing
- ✅ Axios for HTTP requests
- ✅ Async/await syntax
- ✅ Error handling patterns
- ✅ Loading states
- ✅ Event handling
- ✅ CSS scoped styling
- ✅ Responsive design
- ✅ Modern ES6+ JavaScript

## 🔄 Future Enhancements

- Add Pinia for global state management
- Implement search and filter functionality
- Add form for creating new students
- Implement CRUD operations
- Add unit tests with Vitest
- Add TypeScript support
- Implement pagination
- Add dark mode toggle

## 📚 Resources

- [Vue 3 Documentation](https://vuejs.org/)
- [Vue Router Documentation](https://router.vuejs.org/)
- [Axios Documentation](https://axios-http.com/)
- [Vite Documentation](https://vitejs.dev/)

## 👨‍💻 Author

Created as a demonstration of Vue 3 fundamentals including components, props, state, routing, and API integration.

## 📄 License

MIT License - Free for educational use.
