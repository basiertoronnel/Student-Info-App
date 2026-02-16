# Student Info App - Setup Guide

## Quick Start Guide

Follow these steps to get the Student Info App running on your machine.

## Prerequisites

Before you begin, ensure you have the following installed:

1. **Node.js** (version 16 or higher)
   - Download from: https://nodejs.org/
   - Check version: `node --version`

2. **npm** (comes with Node.js)
   - Check version: `npm --version`

## Installation Steps

### Step 1: Navigate to Project Directory

```bash
cd student-info-app
```

### Step 2: Install Dependencies

Install all required packages (Vue, Vue Router, Axios, Vite):

```bash
npm install
```

This will install:
- `vue@^3.4.0` - Vue 3 framework
- `vue-router@^4.2.0` - Official router for Vue
- `axios@^1.6.0` - HTTP client for API calls
- `@vitejs/plugin-vue@^5.0.0` - Vite plugin for Vue
- `vite@^5.0.0` - Build tool and dev server

### Step 3: Start Development Server

```bash
npm run dev
```

You should see output like:
```
VITE v5.0.0  ready in 500 ms

➜  Local:   http://localhost:3000/
➜  Network: use --host to expose
```

### Step 4: Open in Browser

Navigate to: **http://localhost:3000/**

The application should load with the Home page displayed.

## Available Commands

```bash
# Start development server (hot reload enabled)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## Project Structure Overview

```
student-info-app/
│
├── src/
│   ├── components/          # Reusable Vue components
│   │   ├── HeaderComponent.vue
│   │   └── StudentComponent.vue
│   │
│   ├── pages/              # Page components (routes)
│   │   ├── Home.vue
│   │   └── Students.vue
│   │
│   ├── router/             # Vue Router configuration
│   │   └── index.js
│   │
│   ├── assets/             # Static assets (CSS, images)
│   │   └── style.css
│   │
│   ├── App.vue            # Root component
│   └── main.js            # Application entry point
│
├── index.html             # HTML template
├── package.json           # Project dependencies
├── vite.config.js        # Vite configuration
└── README.md             # Documentation
```

## Testing the Application

### 1. Test Routing
- Click on "Home" and "Students" navigation links
- URL should change accordingly
- Active link should be highlighted

### 2. Test Components & Props
- Navigate to Students page
- Verify 3 local students are displayed with correct data:
  - Maria Santos - Computer Science - 3rd Year
  - Juan Dela Cruz - Information Technology - 2nd Year
  - Anna Reyes - Software Engineering - 4th Year

### 3. Test State & Event Handling
- Click "View Details" button on any student card
- Alert should display student information
- Counter should increment with each click

### 4. Test API Integration
- Navigate to Students page
- Observe loading spinner
- Verify API students are loaded from JSONPlaceholder
- Check that student data includes: name, email, username, city, company

### 5. Test Error Handling
- Disconnect from internet
- Navigate to Students page
- Error message should display
- Click "Try Again" button to retry

## Troubleshooting

### Issue: `npm install` fails

**Solution:**
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### Issue: Port 3000 already in use

**Solution:**
```bash
# Find and kill process on port 3000
# On Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# On Mac/Linux:
lsof -ti:3000 | xargs kill -9

# Or change port in vite.config.js:
server: { port: 3001 }
```

### Issue: Vue components not hot reloading

**Solution:**
- Stop the dev server (Ctrl+C)
- Delete `.vite` cache folder
- Restart: `npm run dev`

### Issue: API not loading

**Solution:**
- Check internet connection
- Verify JSONPlaceholder API is accessible: https://jsonplaceholder.typicode.com/users
- Check browser console for errors (F12)

## Features to Explore

### 1. Component Reusability
- `HeaderComponent` is used in `App.vue` with different props
- `StudentComponent` is used multiple times in `Students.vue`

### 2. Props Validation
- Check `StudentComponent.vue` to see prop type validation
- Try passing invalid prop types to see validation errors

### 3. Reactive State
- Click count in `StudentComponent` demonstrates local state
- API data in `Students.vue` shows reactive data binding

### 4. Client-Side Routing
- Uses HTML5 History mode
- No page reloads when navigating
- Browser back/forward buttons work correctly

### 5. Async Operations
- API calls use async/await syntax
- Loading states provide user feedback
- Error handling prevents app crashes

## Making Changes

### Add a New Component

1. Create file in `src/components/`:
```vue
<!-- NewComponent.vue -->
<template>
  <div>{{ message }}</div>
</template>

<script>
export default {
  name: 'NewComponent',
  props: {
    message: String
  }
}
</script>
```

2. Import and use in a page:
```vue
<script>
import NewComponent from '../components/NewComponent.vue'

export default {
  components: { NewComponent }
}
</script>

<template>
  <NewComponent message="Hello!" />
</template>
```

### Add a New Route

1. Create page component in `src/pages/`
2. Add route in `src/router/index.js`:
```javascript
import About from '../pages/About.vue'

const routes = [
  // ... existing routes
  {
    path: '/about',
    name: 'About',
    component: About
  }
]
```

3. Add navigation link in `App.vue`:
```vue
<router-link to="/about" class="nav-link">About</router-link>
```

### Modify Styles

- **Component-specific**: Edit `<style scoped>` in component files
- **Global styles**: Edit `src/assets/style.css`

## Building for Production

When ready to deploy:

```bash
# Create optimized production build
npm run build
```

This creates a `dist/` folder with:
- Minified JavaScript
- Optimized CSS
- Production-ready assets

Preview the production build:
```bash
npm run preview
```

## Next Steps

- Add more student records
- Implement search/filter functionality
- Add a form to create new students
- Integrate with a real backend API
- Add unit tests with Vitest
- Implement state management with Pinia

## Learning Resources

- **Vue 3 Docs**: https://vuejs.org/guide/
- **Vue Router**: https://router.vuejs.org/
- **Axios**: https://axios-http.com/docs/intro
- **Vite**: https://vitejs.dev/guide/

## Support

If you encounter issues:
1. Check the browser console (F12) for errors
2. Review the error message carefully
3. Search for the error on Google or Stack Overflow
4. Check if all dependencies are installed correctly

## Success Checklist

- [ ] Node.js installed
- [ ] Project dependencies installed (`npm install`)
- [ ] Dev server running (`npm run dev`)
- [ ] App loads at http://localhost:3000
- [ ] Can navigate between Home and Students pages
- [ ] Student cards display correctly
- [ ] Click counter works on View Details button
- [ ] API data loads from JSONPlaceholder
- [ ] Loading state shows while fetching
- [ ] Error handling works when offline

Congratulations! Your Vue 3 Student Info App is now running! 🎉
