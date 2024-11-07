# Placement Portal
  
 <b> "Placement Portal" is a web application designed and developed to manage placement-related activities for a company. The main objective was to create a platform where employees could input and manage student data, schedule interviews, track placement statuses, and then export the data in CSV format for generating various reports.<b> 

## Features
-  <b>1. Secure Authentication </b>
     <p>The platform offers a robust sign-up and sign-in system exclusively for company employees, ensuring that only authorized personnel have access to sensitive data and management features.</p>
-  <b> 2. Comprehensive Student Database  </b>
    <p>Employees can view, update, and manage student records, which include essential details like batch, college, and placement status (whether placed or not). The application allows the addition of new students along with key academic scores, such as DSA Final Score, WebD Final Score, and React Final Score.</p>
-  <b> 3.  Interview Management </b>
    <p> The system provides functionality to create and manage interviews, where employees can specify important details like the company name and interview dates, ensuring a smooth scheduling process.</p>
-  <b> 4. Student-Interview Allocation </b>
    <p>Employees can allocate students to specific interviews, streamlining the process of tracking which students are assigned to which company interviews.</p>
-  <b> 5. Interview Result Tracking </b>
    <p>The platform offers a feature to record and track interview results for each student, categorizing them as passed, failed, on hold, or did not attempt, providing clear insights into student performance.</p>
-  <b> 6. External Job Listings </b>
   <p>A dedicated page pulls in real-time job listings for React and Node.js positions across India from external job APIs, such as the GitHub Jobs API, to offer up-to-date job opportunities for students.</p>
-  <b> 7. CSV Export Functionality </b>
-  <p> Employees can download a comprehensive CSV file containing all relevant student and interview data, including details like student ID, name, college, placement status, course scores, interview results, and more. This feature simplifies report generation and data analysis.</p>

### Usage


## Tech Stack

-  <b> 1.Front-end </b>
    <p>HTML, CSS, JavaScript: Formed core of the user interface, allowing for dynamic client-side interactions using these technologies.For building a dynamic and responsive user interface, especially for the External Jobs List page</p>
- <b> 2.Back-end </b>
   <p>Node.js: Utilized for the server-side logic and handling API requests.
      Express.js: This framework was employed to structure the back-end routes and manage HTTP requests and responses efficiently.<p>
-  <b> 3. Authentication </b>
    <p>Passport.js: This library was integrated to implement the authentication system, ensuring secure sign-up and sign-in processes for company employees.</p>
-  <b> 4. CSV Export</b>
    <p>fast-csv: Used for generating CSV files, this Node.js library enabled the smooth export of student and interview data, making it easy to download and compile reports.</p>
-  <b> 5. External API Integration </b>
   <p> Axios: A promise-based HTTP client, Axios was used to fetch external job data from APIs such as GitHub Jobs API, keeping the job listings up-to-date for users.</p>
-  <b> 6.Deployment </b>
   <p>The application was deployed using cloud services like Vercel, enabling seamless hosting, fast access, and scalability based on project needs.</p>
