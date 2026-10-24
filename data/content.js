// All editable content lives here.
export const PROFILE = {
  first: 'SOMESH', last: 'SAINI',
  email: 'someshsaini81@gmail.com',
  linkedin: 'https://www.linkedin.com/in/somesh-saini-526a7b226',
  resume: '/Somesh_Saini_CV.pdf',
}

export const ROLES = [['FULL STACK', 'DEVELOPER'], ['IOT', 'ENGINEER'], ['MERN', 'DEVELOPER']]

export const ABOUT =
  'I’m Somesh Saini, a Full Stack & IoT developer from Jaipur with 3.5+ years of experience building real-time IoT data platforms and production web apps with React, Node.js, MongoDB, and ESP32 hardware. I’ve shipped 7+ live projects serving 700+ users, and I’m open to relocating to Germany.'

export const STATS = [
  { n: 3.5, label: 'years of experience' },
  { n: 7, label: 'live projects shipped' },
  { n: 700, label: 'users served' },
  { n: 20, label: 'ESP32 sensor nodes monitored' },
]

export const SERVICES = [
  { title: 'DEVELOP', text: 'Responsive full stack web apps with secure REST APIs, JWT authentication, and role-based access control.', chips: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'] },
  { title: 'IOT', text: 'ESP32 sensor nodes, GPS tracking, and live dashboards with threshold-based alerts for industrial monitoring.', chips: ['ESP32', 'GPS', 'WebSockets', 'Real-time telemetry', 'Dashboards'] },
  { title: 'TOOLS', text: 'Everyday stack for building, testing, and shipping.', chips: ['JavaScript ES6+', 'Python', 'Git & GitHub', 'Linux', 'Postman', 'Basic SQL'] },
]

export const JOBS = [
  { role: 'Full Stack Developer', org: 'Gateway Abroad, Jaipur', year: '2026', text: 'Designed and deployed Ooshasglobal, the global admissions platform connecting international offices, counselors, and students. Built secure REST APIs and role-based access control for role-scoped data isolation across offices.' },
  { role: 'Full Stack & IoT Developer', org: 'Oxymora Technology Pvt. Ltd.', year: '2022', text: 'Engineered and maintained 5+ full stack web apps and real-time IoT dashboards for 500+ active users. Built live industrial IoT solutions with GPS vehicle tracking and automated alerts for 20+ ESP32 sensor nodes.' },
  { role: 'M.Sc. Computer Science', org: 'Rajasthan, Jaipur', year: '2025', text: 'Postgraduate study in computer science, in progress alongside full-time work.' },
]

// Add `image: '/projects/name.png'` (file in /public/projects) to show a screenshot.
export const PROJECTS = [
  { title: 'Vehicle Tracking Dashboard', sub: 'IoT Integration', tools: 'ESP32, GPS, WebSockets, React, Node.js, MongoDB', text: 'Real-time telematics for 20+ GPS-connected vehicles with live location and analytics. Streams data over WebSockets with sub-10-second refresh, and automated alerts cut fleet managers’ manual check-ins by about 40%.', abbr: 'VT', colors: ['#4c1d95', '#7c3aed'] },
  { title: 'Temperature-Humidity Logger', sub: 'Hardware and Cloud', tools: 'ESP32, MongoDB, Node.js, React', text: 'End-to-end pipeline for real-time data from 20+ ESP32 sensors. Optimized MongoDB schemas store timestamped readings every 5 seconds, with historical trend charts and threshold-based alerts for anomalies.', abbr: 'TL', colors: ['#0f766e', '#14b8a6'] },
  { title: 'Ooshasglobal', sub: 'Admissions Management Platform', tools: 'REST APIs, JWT, RBAC, Node.js, MongoDB', text: 'Core REST APIs and secure authentication linking international offices, counselors, and students, with role scopes for counseling, enrollment tracking, and university resource mapping.', abbr: 'OG', colors: ['#9a3412', '#f97316'] },
  { title: 'Ooshasprep', sub: 'Test-Preparation Platform', tools: 'MERN stack', text: 'Full-stack learning platform with automated mocks and modules for IELTS, GRE, and GMAT, plus backend content-ingestion pipelines that speed up curriculum deployment for admins.', abbr: 'OP', colors: ['#1e3a8a', '#3b82f6'] },
  { title: 'Media Plus Bharat', sub: 'News Website', tools: 'Next.js, Node.js API', text: 'A news website with its own backend API, built for speed and scale.', abbr: 'MP', colors: ['#831843', '#ec4899'], link: 'https://mediaplusbharat.com' },
]

export const LABELS = ['React', 'Node.js', 'MongoDB', 'Express', 'Next.js', 'JavaScript', 'Python', 'Tailwind', 'ESP32', 'WebSockets', 'Git', 'Linux', 'Postman', 'JWT']
