<template>
  <div class="header">
    <h1>{{ title }}</h1>
    <p v-if="subtitle">{{ subtitle }}</p>
  </div>
</template>

<script>
export default {
  name: 'HeaderComponent',
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.header {
  background: white;
  padding: 32px 24px;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  margin-bottom: 24px;
  text-align: center;
}

.header h1 {
  color: #111827;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 8px;
  letter-spacing: -0.02em;
}

.header p {
  color: #6b7280;
  font-size: 1rem;
  font-weight: 400;
}

@media (max-width: 768px) {
  .header h1 {
    font-size: 1.5rem;
  }
  
  .header p {
    font-size: 0.875rem;
  }
}
</style>
