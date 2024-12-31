# Guvi---Login-registration-profile
# Agricart
Agricart is a platform that bridges the gap between farmers and customers by providing a seamless way to buy seasonal, preservative-free fruits and vegetables. The platform ensures fair prices for farmers while offering healthy and fresh produce to customers.

Features
Product Categories: Wide variety of seasonal fruits and vegetables.
Farmer-Friendly: Fair pricing for farmers without middlemen.
Customer Health-Focus: Fresh produce without preservatives.
Secure Authentication: New login and registration system for user profiles.
Technology Stack
Frontend: HTML, CSS, JavaScript
Backend: Spring Boot
Database: MySQL
Login and Registration
The platform now includes a Profile Login and Registration System to improve user experience.

Features of the Authentication System
User Registration:

New users can create an account using their email and a secure password.
Input validation for fields like name, email, and password.
User Login:

Registered users can log in to access personalized features.
Secure password authentication.
Profile Management:

Users can view and update their profile information.
Password reset functionality.
How to Use
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/agricart.git  
cd agricart  
Configure the database in the Spring Boot application.properties file:

properties
Copy code
spring.datasource.url=jdbc:mysql://localhost:3306/agricart  
spring.datasource.username=your-username  
spring.datasource.password=your-password  
Run the application:

bash
Copy code
./mvnw spring-boot:run  
Access the application in your browser at http://localhost:8080.

Screenshots
Registration Page

Login Page

Dashboard

Future Enhancements
Add social media login integration.
Implement order history and tracking for customers.
Introduce features for farmer profiles and reviews.
Contributing
Contributions are welcome! Please open an issue or submit a pull request for any suggestions or fixes.

License
This project is licensed under the MIT License.
