import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div>
      <Link to="/"> Go to Home Page</Link>

      <h2>
        📍 Contact Us We’re always happy to help you find the perfect rental!
        Get in touch with us in a way that’s convenient for you. 📞 Phone: +1
        (123) 456-7890 📧 Email: info@yourrentalcompany.com 🏢 Our Office: 12
        Berliner Strasse, Berlin, Germany 🕒 Business Hours: Monday – Friday:
        9:00 AM – 6:00 PM Saturday: 10:00 AM – 3:00 PM Sunday: Closed 📍 Visit
        our office or leave a request – we’ll help you find the ideal apartment
        for rent!
      </h2>
    </div>
  );
}

export default Contact;
