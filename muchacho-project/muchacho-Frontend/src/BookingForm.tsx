import { useState } from 'react';
import backgroundImage from './assets/nyttboka.png';

export default function BookingForm() {
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    people: 1
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const selectedDate = new Date(formData.date);
    selectedDate.setHours(0, 0, 0, 0);

    // 🔒 Kolla om datum är i det förflutna
    if (selectedDate < today) {
      setMessage('❌ Du kan inte boka ett datum i det förflutna.');
      setSuccess(false);
      return;
    }

    // 🔒 Kolla öppettider: 12:00 till 01:30
    const [hour, minute] = formData.time.split(':').map(Number);
    const totalMinutes = hour * 60 + minute;

    const openingMinutes = 12 * 60; // 12:00
    const closingMinutes = 25 * 60 + 30; // 01:30 (25:30 i "virtual time" efter midnatt)

    // Om tiden är mellan 00:00–01:30 justeras till 24+ timmar
    const adjustedMinutes = hour < 3 ? (hour + 24) * 60 + minute : totalMinutes;

    if (adjustedMinutes < openingMinutes || adjustedMinutes > closingMinutes) {
      setMessage('❌ Tiden måste vara mellan 12:00 och 01:30.');
      setSuccess(false);
      return;
    }

    const booking = {
      name: formData.name,
      email: formData.email,
      date: formData.date, // YYYY-MM-DD
      time: formData.time, // HH:mm
      people: formData.people
    };

    try {
      const res = await fetch('http://localhost:5298/api/Booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(booking)
      });

      const data = await res.json();

      if (res.ok) {
        setMessage('✅ Bokningen lyckades!');
        setSuccess(true);
        setFormData({ name: '', email: '', date: '', time: '', people: 1 });
        setTimeout(() => {
          setMessage('');
          setIsOpen(false);
        }, 5000);
      } else {
        setMessage('❌ Bokningen misslyckades: ' + (data.message || 'Okänt fel'));
        setSuccess(false);
      }
    } catch (err: any) {
      setMessage('❌ Kunde inte nå servern: ' + err.message);
      setSuccess(false);
    }
  };

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="mx-auto block bg-green-600 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:bg-green-700 transition"
      >
        Boka Bord
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 overflow-y-auto">
          <div
            className="relative w-full max-w-2xl rounded-xl shadow-lg p-8 bg-cover bg-center text-white max-h-[90vh] overflow-y-auto"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-xl font-bold bg-red-600 hover:bg-red-700 rounded-full w-8 h-8 flex items-center justify-center"
            >
              ×
            </button>

            <h2 className="text-4xl font-bold text-center mb-8">Boka Bord</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {['name', 'email', 'date', 'time', 'people'].map((field) => (
                <div className="flex flex-col" key={field}>
                  <label htmlFor={field} className="text-lg mb-1">
                    {field === 'people'
                      ? 'Antal personer'
                      : field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  <input
                    id={field}
                    name={field}
                    type={
                      field === 'email'
                        ? 'email'
                        : field === 'date'
                        ? 'date'
                        : field === 'time'
                        ? 'time'
                        : field === 'people'
                        ? 'number'
                        : 'text'
                    }
                    value={(formData as any)[field]}
                    onChange={handleChange}
                    placeholder={field === 'people' ? 't.ex. 2' : ''}
                    min={field === 'people' ? '1' : undefined}
                    required
                    className="rounded-md px-4 py-3 text-black bg-white focus:ring focus:ring-yellow-300"
                  />
                </div>
              ))}

              <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 rounded-lg transition"
              >
                Skicka Bokning
              </button>

              {message && (
                <p
                  className={`text-center text-sm mt-2 font-semibold ${
                    success ? 'text-green-200' : 'text-red-200'
                  }`}
                >
                  {message}
                </p>
              )}
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
