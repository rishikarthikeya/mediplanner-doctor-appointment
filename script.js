const diseases = [
  'Allergies', 'Asthma', 'Back Pain', 'Bronchitis', 'Cancer',
  'Chickenpox', 'Chronic Pain', 'Cold', 'COVID-19', 'Dengue',
  'Diabetes', 'Diarrhea', 'Ear Infection', 'Eczema', 'Flu',
  'Gastritis', 'Gout', 'Headache', 'Heart Disease', 'Hypertension'
];

const doctors = {
  'Allergies': ['Dr. Smith', 'Dr. Johnson'],
  'Asthma': [],
  'Back Pain': ['Dr. Miller', 'Dr. Wilson'],
  'Bronchitis': ['Dr. Moore', 'Dr. Taylor'],
  'Cancer': ['Dr. Anderson', 'Dr. Thomas'],
  'Chickenpox': ['Dr. Jackson', 'Dr. White'],
  'Chronic Pain': ['Dr. Harris', 'Dr. Martin'],
  'Cold': ['Dr. Thompson', 'Dr. Garcia'],
  'COVID-19': ['Dr. Martinez', 'Dr. Robinson'],
  'Dengue': ['Dr. Clark', 'Dr. Rodriguez'],
  'Diabetes': ['Dr. Lewis', 'Dr. Lee'],
  'Diarrhea': ['Dr. Walker', 'Dr. Hall'],
  'Ear Infection': ['Dr. Allen', 'Dr. Young'],
  'Eczema': ['Dr. Hernandez', 'Dr. King'],
  'Flu': ['Dr. Wright', 'Dr. Lopez'],
  'Gastritis': ['Dr. Hill', 'Dr. Scott'],
  'Gout': ['Dr. Green', 'Dr. Adams'],
  'Headache': ['Dr. Baker', 'Dr. Gonzalez'],
  'Heart Disease': ['Dr. Nelson', 'Dr. Carter'],
  'Hypertension': ['Dr. Mitchell', 'Dr. Perez']
};

const medicines = {
  'Allergies': 'Antihistamines',
  'Asthma': 'Inhalers',
  'Back Pain': 'Pain Relievers',
  'Bronchitis': 'Cough Syrup',
  'Cancer': 'Chemotherapy',
  'Chickenpox': 'Calamine Lotion',
  'Chronic Pain': 'Analgesics',
  'Cold': 'Decongestants',
  'COVID-19': 'Antivirals',
  'Dengue': 'Pain Relievers',
  'Diabetes': 'Insulin',
  'Diarrhea': 'Oral Rehydration Salts',
  'Ear Infection': 'Antibiotics',
  'Eczema': 'Moisturizers',
  'Flu': 'Antivirals',
  'Gastritis': 'Antacids',
  'Gout': 'Anti-inflammatory Drugs',
  'Headache': 'Pain Relievers',
  'Heart Disease': 'Beta Blockers',
  'Hypertension': 'ACE Inhibitors'
};

document.addEventListener('DOMContentLoaded', () => {
  const diseaseSelect = document.getElementById('disease');
  diseases.forEach(disease => {
    const option = document.createElement('option');
    option.value = disease;
    option.textContent = disease;
    diseaseSelect.appendChild(option);
  });
});

function findDoctors() {
  const disease = document.getElementById('disease').value;
  const doctorListDiv = document.getElementById('doctorList');
  const doctorsUl = document.getElementById('doctors');
  const noDoctorsP = document.getElementById('noDoctors');
  const medicinesSpan = document.getElementById('medicines');
  const doctorSelect = document.getElementById('doctor');

  doctorsUl.innerHTML = '';
  doctorSelect.innerHTML = '';

  if (doctors[disease] && doctors[disease].length > 0) {
    doctors[disease].forEach(doctor => {
      const li = document.createElement('li');
      li.textContent = doctor;
      doctorsUl.appendChild(li);

      const option = document.createElement('option');
      option.value = doctor;
      option.textContent = doctor;
      doctorSelect.appendChild(option);
    });
    noDoctorsP.classList.add('hidden');
    document.getElementById('appointmentForm').classList.remove('hidden');
  } else {
    noDoctorsP.classList.remove('hidden');
    medicinesSpan.textContent = medicines[disease] || 'Consult a pharmacist';
    document.getElementById('appointmentForm').classList.add('hidden');
  }

  doctorListDiv.classList.remove('hidden');
}

function bookAppointment() {
  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const phone = document.getElementById('phone').value;
  const disease = document.getElementById('disease').value;
  const doctor = document.getElementById('doctor').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;

  const confirmationDetails = `
    Name: ${name}<br>
    Age: ${age}<br>
    Phone: ${phone}<br>
    Disease: ${disease}<br>
    Doctor: ${doctor}<br>
    Date: ${date}<br>
    Time: ${time}
  `;

  document.getElementById('confirmationDetails').innerHTML = confirmationDetails;
  document.getElementById('confirmation').classList.remove('hidden');
}
