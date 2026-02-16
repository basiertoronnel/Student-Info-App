<template>
  <div>
    <h2 class="page-title">Student Directory</h2>
    
    <!-- Local Students -->
    <h3 class="section-title">Enrolled Students</h3>
    <div class="students-grid">
      <StudentComponent
        v-for="student in localStudents"
        :key="student.id"
        :name="student.name"
        :course="student.course"
        :year="student.year"
        :student-id="student.id"
      />
    </div>

    <!-- API Students -->
    <div class="api-students">
      <h3 class="section-title">Students from API</h3>
      
      <!-- Loading State -->
      <div v-if="loading" class="loading">
        <div class="spinner"></div>
        <p>Loading student data...</p>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="error">
        <strong>Error Loading Data</strong>
        <p>{{ error }}</p>
        <button class="retry-btn" @click="fetchStudents">
          Try Again
        </button>
      </div>

      <!-- Success State -->
      <div v-else class="students-grid">
        <div v-for="student in apiStudents" :key="student.id" class="api-student-card">
          <h4>{{ student.name }}</h4>
          <p><strong>Email:</strong> {{ student.email }}</p>
          <p><strong>Username:</strong> {{ student.username }}</p>
          <p><strong>City:</strong> {{ student.address.city }}</p>
          <p><strong>Company:</strong> {{ student.company.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StudentComponent from '../components/StudentComponent.vue'
import axios from 'axios'

export default {
  name: 'StudentsPage',
  components: {
    StudentComponent
  },
  data() {
    return {
      // Local Students Data
      localStudents: [
        {
          id: 1,
          name: 'ABANALES, GENESIS',
          course: 'Computer Science',
          year: '3rd Year'
        },
        {
          id: 2,
          name: 'ANTINERO, SHEWELIZ',
          course: 'Information Technology',
          year: '2nd Year'
        },
        {
          id: 3,
          name: 'ARELA, MARK CHRISTIAN',
          course: 'Computer Science',
          year: '4th Year'
        },
        {
          id: 4,
          name: 'BASIERTO, RONNEL',
          course: 'Information Technology',
          year: '3rd Year'
        },
        {
          id: 5,
          name: 'BLAN, MERDELYN',
          course: 'Computer Science',
          year: '2nd Year'
        },
        {
          id: 6,
          name: 'CABALEJO, JEHUS',
          course: 'Information Technology',
          year: '4th Year'
        },
        {
          id: 7,
          name: 'CARASIG, CHRIS JOSHARA JHAYNE',
          course: 'Computer Science',
          year: '3rd Year'
        },
        {
          id: 8,
          name: 'CRUZ, JAZMINE',
          course: 'Information Technology',
          year: '2nd Year'
        },
        {
          id: 9,
          name: 'DUEÑAS, CHARLES NATHANIEL',
          course: 'Computer Science',
          year: '4th Year'
        },
        {
          id: 10,
          name: 'DUNGO, ROSE BREN',
          course: 'Information Technology',
          year: '3rd Year'
        },
        {
          id: 11,
          name: 'GERALDEZ, MOLLY SARAH',
          course: 'Computer Science',
          year: '2nd Year'
        },
        {
          id: 12,
          name: 'HERADURA, RODEL JONES',
          course: 'Information Technology',
          year: '4th Year'
        },
        {
          id: 13,
          name: 'MAHIPUS, ABRAHAM NIEL',
          course: 'Computer Science',
          year: '3rd Year'
        },
        {
          id: 14,
          name: 'MARQUEZ, ANAMARIE',
          course: 'Information Technology',
          year: '2nd Year'
        },
        {
          id: 15,
          name: 'MULAWIN, MIRIAM',
          course: 'Computer Science',
          year: '4th Year'
        },
        {
          id: 16,
          name: 'PLACIDO, CHRISTIAN JOHN',
          course: 'Information Technology',
          year: '3rd Year'
        },
        {
          id: 17,
          name: 'PROTACIO, ALMER JANN',
          course: 'Computer Science',
          year: '2nd Year'
        },
        {
          id: 18,
          name: 'RAVANERA, BRIAN LOUIE',
          course: 'Information Technology',
          year: '4th Year'
        },
        {
          id: 19,
          name: 'ROTA, AXEL JOHANNES',
          course: 'Computer Science',
          year: '3rd Year'
        },
        {
          id: 20,
          name: 'SANCHEZ, MARK ANTHONY',
          course: 'Information Technology',
          year: '2nd Year'
        }
      ],
      
      // API State
      apiStudents: [],
      loading: false,
      error: null
    }
  },
  methods: {
    async fetchStudents() {
      this.loading = true
      this.error = null
      
      try {
        // Using Axios for API call
        const response = await axios.get('https://jsonplaceholder.typicode.com/usrs')
        
        // Simulate network delay for better UX
        await new Promise(resolve => setTimeout(resolve, 500))
        
        this.apiStudents = response.data
      } catch (err) {
        this.error = `Failed to fetch student data: ${err.message}`
        console.error('API Error:', err)
      } finally {
        this.loading = false
      }
    }
  },
  mounted() {
    // Fetch API data when component is mounted
    this.fetchStudents()
  }
}
</script>

<style scoped>
.page-title {
  color: #111827;
  margin-bottom: 24px;
  font-size: 1.875rem;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.section-title {
  color: #111827;
  margin-bottom: 16px;
  margin-top: 32px;
  font-size: 1.25rem;
  font-weight: 600;
}

.students-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}

/* API Students Styles */
.api-students {
  margin-top: 48px;
}

.loading {
  text-align: center;
  padding: 48px;
  color: #6b7280;
}

.loading p {
  font-size: 1rem;
  margin-top: 16px;
}

.spinner {
  border: 3px solid #f3f4f6;
  border-top: 3px solid #2563eb;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 0.8s linear infinite;
  margin: 0 auto;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.error {
  background: #fef2f2;
  border: 1px solid #fecaca;
  color: #991b1b;
  padding: 24px;
  border-radius: 8px;
  text-align: center;
}

.error strong {
  display: block;
  font-size: 1.125rem;
  margin-bottom: 8px;
}

.error p {
  font-size: 0.875rem;
  color: #dc2626;
}

.retry-btn {
  margin-top: 16px;
  padding: 10px 24px;
  background: #2563eb;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.retry-btn:hover {
  background: #1d4ed8;
}

.api-student-card {
  background: white;
  border: 1px solid #e5e7eb;
  padding: 20px;
  border-radius: 8px;
  transition: all 0.2s ease;
}

.api-student-card:hover {
  border-color: #2563eb;
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.1);
}

.api-student-card h4 {
  color: #111827;
  margin-bottom: 12px;
  font-size: 1.125rem;
  font-weight: 600;
}

.api-student-card p {
  color: #6b7280;
  margin: 8px 0;
  line-height: 1.6;
  font-size: 0.875rem;
}

.api-student-card strong {
  color: #374151;
  font-weight: 500;
}

@media (max-width: 768px) {
  .students-grid {
    grid-template-columns: 1fr;
  }
}
</style>
