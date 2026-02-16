<template>
  <div id="app">
    <HeaderComponent 
      :title="appTitle" 
      :subtitle="appSubtitle" 
    />
    
    <nav class="nav">
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link to="/students" class="nav-link">Students</router-link>
    </nav>
    
    <div class="page-container">
      <router-view />
    </div>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent
  },
  data() {
    return {
      appTitle: 'Student Info App',
      appSubtitle: 'Student Management System'
    }
  }
}
</script>

<style scoped>
#app {
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
}

.nav {
  display: flex;
  gap: 12px;
  justify-content: center;
  margin-bottom: 24px;
}

.nav-link {
  padding: 10px 24px;
  background: white;
  color: #6b7280;
  text-decoration: none;
  border-radius: 6px;
  border: 1px solid #e5e7eb;
  transition: all 0.2s ease;
  font-weight: 500;
  font-size: 0.875rem;
}

.nav-link:hover {
  color: #2563eb;
  border-color: #2563eb;
}

.nav-link.router-link-active {
  background: #2563eb;
  color: white;
  border-color: #2563eb;
}

.page-container {
  background: white;
  padding: 32px;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  min-height: 400px;
}

@media (max-width: 768px) {
  #app {
    padding: 16px;
  }
  
  .page-container {
    padding: 20px;
  }
}
</style>
