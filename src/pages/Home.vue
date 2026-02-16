<template>
  <div class="home-content">
    <h2>Welcome to Student Information System</h2>
   
    <div class="features">
      <div class="feature-card">
        <h3>Student Management</h3>
        <p>View and manage student information with ease</p>
      </div>
      <div class="feature-card">
        <h3>Real-time Updates</h3>
        <p>Interactive components with state management</p>
      </div>
      <div class="feature-card">
        <h3>API Integration</h3>
        <p>Fetch and display data from external sources</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style scoped>
.home-content {
  text-align: center;
}

.home-content h2 {
  color: #111827;
  font-size: 1.875rem;
  font-weight: 700;
  margin-bottom: 16px;
  letter-spacing: -0.02em;
}

.home-content .subtitle {
  color: #374151;
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 1.6;
  margin-bottom: 12px;
}

.home-content .description {
  color: #6b7280;
  font-size: 1rem;
  line-height: 1.7;
  margin-bottom: 32px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 40px;
}

.feature-card {
  background: #f9fafb;
  padding: 24px;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  text-align: center;
  transition: all 0.2s ease;
}

.feature-card:hover {
  border-color: #2563eb;
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.1);
}

.feature-card h3 {
  color: #111827;
  margin-bottom: 12px;
  font-size: 1.125rem;
  font-weight: 600;
}

.feature-card p {
  color: #6b7280;
  font-size: 0.875rem;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .features {
    grid-template-columns: 1fr;
  }
  
  .home-content h2 {
    font-size: 1.5rem;
  }
}
</style>
