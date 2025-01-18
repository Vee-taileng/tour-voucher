import React, {useState} from 'react';
import app from "../firebaseConfig";
import { getDatabase, ref, set, push } from "firebase/database";
import { useNavigate } from 'react-router-dom';

const VoucherForm = () => {
    const [guestFirstName, setGuestFirstName] = useState('');
    const [guestSurname, setGuestSurname] = useState('');
    const [pickUpHotel, setPickUpHotel] = useState('');
    const [guestPhoneNumber, setGuestPhoneNumber] = useState('');
    const [tripDate, setTripDate] = useState('');
    const [tripName, setTripName] = useState('');
    const [numberOfPax, setNumberOfPax] = useState('');
    const [pricePerPax, setPricePerPax] = useState('');
    const [totalPrice, setTotalPrice] = useState('');

    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
    
        // Calculate the total price based on number of pax and price per pax
        const calculatedTotalPrice = parseFloat(numberOfPax) * parseFloat(pricePerPax);
    
        // Get reference to Firebase Realtime Database
        const db = getDatabase(app);
        const voucherRef = ref(db, 'vouchers/'); // You can replace 'vouchers/' with your desired path
    
        // Create a new voucher entry with push
        const newVoucherRef = push(voucherRef);
    
        // Set data for the new voucher
        set(newVoucherRef, {
          guestFirstName,
          guestSurname,
          pickUpHotel,
          guestPhoneNumber,
          tripDate,
          tripName,
          numberOfPax,
          pricePerPax,
          totalPrice: calculatedTotalPrice
        })
          .then(() => {
            // Redirect to the confirmation page or another page after successful submission
            navigate('/dashboard'); // You can replace '/confirmation' with your desired route
          })
          .catch((error) => {
            console.error("Error saving data to Firebase:", error);
          });
      };
    
      return (
        <div>
          <h2>Voucher Form</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Guest First Name:</label>
              <input 
                type="text" 
                value={guestFirstName} 
                onChange={(e) => setGuestFirstName(e.target.value)} 
                required 
              />
            </div>
            <div>
              <label>Guest Surname:</label>
              <input 
                type="text" 
                value={guestSurname} 
                onChange={(e) => setGuestSurname(e.target.value)} 
                required 
              />
            </div>
            <div>
              <label>Pick up Hotel:</label>
              <input 
                type="text" 
                value={pickUpHotel} 
                onChange={(e) => setPickUpHotel(e.target.value)} 
                required 
              />
            </div>
            <div>
              <label>Guest Phone Number:</label>
              <input 
                type="text" 
                value={guestPhoneNumber} 
                onChange={(e) => setGuestPhoneNumber(e.target.value)} 
                required 
              />
            </div>
            <div>
              <label>Trip Date:</label>
              <input 
                type="date" 
                value={tripDate} 
                onChange={(e) => setTripDate(e.target.value)} 
                required 
              />
            </div>
            <div>
              <label>Trip Name:</label>
              <input 
                type="text" 
                value={tripName} 
                onChange={(e) => setTripName(e.target.value)} 
                required 
              />
            </div>
            <div>
              <label>Number of Pax:</label>
              <input 
                type="number" 
                value={numberOfPax} 
                onChange={(e) => setNumberOfPax(e.target.value)} 
                required 
              />
            </div>
            <div>
              <label>Price per Pax:</label>
              <input 
                type="number" 
                value={pricePerPax} 
                onChange={(e) => setPricePerPax(e.target.value)} 
                required 
              />
            </div>
            <div>
              <label>Total Price:</label>
              <input 
                type="number" 
                value={totalPrice || ''} 
                readOnly 
                disabled 
              />
            </div>
            <button type="submit">Submit Voucher</button>
          </form>
        </div>
      );
};

export default VoucherForm;
