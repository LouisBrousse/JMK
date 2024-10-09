import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Importe les styles par défaut de react-datepicker

const DatePickerComponent = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="datepicker-container">
      <DatePicker
        id="date-picker"
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="dd/MM/yyyy" // Format de la date
        className="form-control" // Utilisation de Bootstrap
        placeholderText="Sélectionner une date"
      />
    </div>
  );
};

export default DatePickerComponent;
