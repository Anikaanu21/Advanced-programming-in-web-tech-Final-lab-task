import PropTypes from 'prop-types'
import CourseTag from './CourseTag'
import StatBadge from './StatBadge'

type StudentCardProps = {
  name: string
  id: string
  avatar: string
  gpa: number
  major: string
}

function StudentCard({
  name,
  id,
  avatar,
  gpa,
  major,
}: StudentCardProps) {
  return (
    <div className="student-card">

      <img
        className="student-avatar"
        src={avatar}
        alt={name}
      />

      <h2>{name}</h2>

      <p className="student-id">
        Student ID: {id}
      </p>

      <p>
        Major: {major}
      </p>

      <div className="student-stats">

        <StatBadge
          label="GPA"
          value={gpa}
        />

        <StatBadge
          label="Credits"
          value={90}
        />

      </div>

      <div className="course-list">

        <CourseTag
          courseName="Web Technologies"
          color="#dbeafe"
        />

        <CourseTag
          courseName="Database"
          color="#dcfce7"
        />

        <CourseTag
          courseName="Algorithms"
          color="#fef3c7"
        />

      </div>

    </div>
  )
}

StudentCard.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  gpa: PropTypes.number.isRequired,
  major: PropTypes.string.isRequired,
}

export default StudentCard