# 🖥️ Portfolio Builder

A **dynamic Portfolio Builder** web application designed to help users create and customize professional portfolios without coding knowledge.  
Built with **Java**, **Spring Boot**, **React**, and **SQL**, this project offers a seamless full-stack solution for personal branding and career showcase.

---

## ✨ Features

- 🧑‍💻 **Create and Customize Portfolios**: Add personal information, skills, projects, experience, and education details.
- 🎨 **Real-time Preview**: See live updates as you build and edit your portfolio.
- 📄 **Predefined Templates**: Choose from multiple portfolio designs.
- 💾 **Save and Edit**: Store and update portfolio data anytime.
- 📤 **Export Option**: Download your portfolio as a PDF or share via a public link.
- 🔒 **Authentication**: User login and secure profile management.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|:----------:|:-------:|
| **Java** | Backend development and business logic |
| **Spring Boot** | REST API development, authentication, server-side configuration |
| **React.js** | Frontend development and dynamic user interfaces |
| **SQL (MySQL/PostgreSQL)** | Database management for user data, portfolios, and templates |
| **Spring Security** | User authentication and authorization |
| **Axios** | Frontend-backend communication |

## 🚀 How to Run Locally

```bash
# 1. Clone the repository
git clone https://github.com/your-username/portfolio-builder.git
cd portfolio-builder

# 2. Start the backend
cd backend
./mvnw spring-boot:run

# 3. Start the frontend
cd ../frontend
npm install
npm start
```

Visit `http://localhost:3000` to use the application.

---

## ⚙️ Configuration

### Backend (`application.properties`)
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/portfolio_db
spring.datasource.username=your-username
spring.datasource.password=your-password
spring.jpa.hibernate.ddl-auto=update
server.port=8080
```

### Frontend (`.env`)
```env
REACT_APP_API_URL=http://localhost:8080/api
```

---
