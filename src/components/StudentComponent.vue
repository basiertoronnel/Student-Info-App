<template>
  <div class="student-card">
    <h3>{{ name }}</h3>
    <div class="student-info">
      <div class="info-row">
        <span class="info-label">Course</span>
        <span class="info-value">{{ course }}</span>
      </div>
      <div class="info-row">
        <span class="info-label">Year</span>
        <span class="info-value">{{ year }}</span>
      </div>
      <div class="info-row">
        <span class="info-label">Student ID</span>
        <span class="info-value">#{{ studentId }}</span>
      </div>
    </div>
    <button class="student-btn" @click="handleClick">
      View Details {{ clickCount > 0 ? `(${clickCount})` : '' }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'StudentComponent',
  props: {
    name: {
      type: String,
      required: true
    },
    course: {
      type: String,
      required: true
    },
    year: {
      type: String,
      required: true
    },
    studentId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      clickCount: 0
    }
  },
  methods: {
    handleClick() {
      this.clickCount++
      alert(`Student Details:\nName: ${this.name}\nCourse: ${this.course}\nYear: ${this.year}\nClicked ${this.clickCount} time(s)`)
    }
  }
}
</script>

<style scoped>
.student-card {
  background: white;
  border: 1px solid #e5e7eb;
  padding: 24px;
  border-radius: 8px;
  transition: all 0.2s ease;
}

.student-card:hover {
  border-color: #2563eb;
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.1);
}

.student-card h3 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 16px;
  letter-spacing: -0.01em;
}

.student-info {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 20px;
}

.info-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 12px;
  border-bottom: 1px solid #f3f4f6;
}

.info-row:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.info-label {
  font-size: 0.875rem;
  font-weight: 500;
  color: #6b7280;
}

.info-value {
  font-size: 0.875rem;
  font-weight: 600;
  color: #111827;
}

.student-btn {
  width: 100%;
  background: #2563eb;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.student-btn:hover {
  background: #1d4ed8;
}

.student-btn:active {
  transform: scale(0.98);
}
</style>
