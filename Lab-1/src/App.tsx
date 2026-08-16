import './App.css'

import DashboardHeader from './components/DashboardHeader'
import StudentCard from './components/StudentCard'
import StatBadge from './components/StatBadge'

function App() {
  return (
    <div id="dashboard">

      <DashboardHeader
        title="Student Dashboard"
        tagline="Manage and view student academic information"
      />

      <main>

        <section className="dashboard-summary">

          <h2>
            Student Overview
          </h2>

          <div className="summary-badges">

            <StatBadge
              label="Total Students"
              value={4}
            />

            <StatBadge
              label="Department"
              value="CSE"
            />

          </div>

        </section>

        <section
          className="students-section"
          id="students"
        >

          <h2>
            Students
          </h2>

          <div className="student-grid">

            <StudentCard
              name="Jarin"
              id="23-888990-2"
              avatar="/images/jarin.jpeg"
              gpa={3.99}
              major="Computer Science"
            />

            <StudentCard
              name="Queen"
              id="21-989898-2"
              avatar="/images/queen.jpeg"
              gpa={2.49}
              major="Software Engineering"
            />

            <StudentCard
              name="Nusrat"
              id="24-123456-1"
              avatar="/images/nusrat.jpeg"
              gpa={3.75}
              major="Information Technology"
            />

            <StudentCard
              name="Tom"
              id="22-456789-3"
              avatar="/images/tom.jpeg"
              gpa={3.45}
              major="Computer Science"
            />

          </div>

        </section>

      </main>

    </div>
  )
}

export default App