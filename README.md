# **Booking App**

This project is a slot booking application where users can select sports centers, choose a sport, and book available slots. It satisfies all given requirements, managing errors through alerts and logging to the console. Certain assumptions were made, such as hardcoded images, 1-hour slots per day, and a limited number of courts, so pagination or infinite scrolling was avoided due to time constraints. Additionally, **Bull npm** is used to automatically release a slot after one hour from booking.

## **Features**
**College ID number** IIT2021272
### **Backend**

1. **APIs**:
   - **View Bookings API**: Retrieves bookings for a specific center, sport, and date.
   - **Create Booking API**: Allows the creation of new bookings, ensuring no conflicts with existing bookings.
2. **Data Handling**:
   - Prevents double booking of the same slot and court.
   - Includes basic error handling and input validation.
3. **Slot Availability**:
   - Utilizes **Bull npm** to automatically make slots available again one hour after booking.
4. **Authentication**:
   - JWT-based authentication to secure API access.

### **Frontend**

1. **User Interface**:
   - Simple and intuitive UI:
     - Select a facility (center) and sport.
     - View bookings for a specific day and sport.
     - Create new bookings by selecting a time slot and court.
2. **Core Features**:
   - **View Bookings**: Displays bookings for all courts of the selected sport and date.
   - **Create Bookings**: Users can create bookings by selecting a time slot and court.
3. **Usability**:
   - User-friendly interface.
   - Feedback for successful operations and error messages.
4. **Assumptions**:
     -Time Slots: Each booking slot is one hour long.
     -Limited Courts: Since the number of courts is relatively low, no pagination or infinite scrolling is required.
     -Static Images: For the sake of simplicity and faster loading times, hardcoded images are used throughout the app.
5. **Future Improvement**:
     - **Pagination**: Implement pagination or infinite scrolling if the number of courts increases.
     - **Dynamic Images**: Add support for dynamic images in the future for a more flexible UI.
## **Setup Instructions**

### **Prerequisites**
Before setting up the project, make sure you have the following installed:
- **Node.js** (v14.x or higher)
- **MongoDB** (Local instance or MongoDB Atlas)
- **Vercel CLI** (for deploying to Vercel)

### **Backend Setup**

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/booking-app.git
   cd booking-app
   npm install
   cd frontend
   npm install 
   ```
2. **Deployed Link ***
   ```bash
      http://booking-app-nine-blue.vercel.app/
  ```
