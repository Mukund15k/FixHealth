const doctorData = [
  {
    name: 'Dr. Gupta',
    expertise: 'Internal Medicine',
    city: 'Mumbai'
  },
  {
    name: 'Dr. Sharma',
    expertise: 'Pediatrics',
    city: 'Delhi'
  },
  {
    name: 'Dr. Reddy',
    expertise: 'Cardiology',
    city: 'Hyderabad'
  },
  {
    name: 'Dr. Singh',
    expertise: 'Orthopedics',
    city: 'Chennai'
  },
  {
    name: 'Dr. Verma',
    expertise: 'Dermatology',
    city: 'Kolkata'
  },
  {
    name: 'Dr. Patel',
    expertise: 'Ophthalmology',
    city: 'Ahmedabad'
  },
  {
    name: 'Dr. Khan',
    expertise: 'ENT',
    city: 'Bangalore'
  },
  {
    name: 'Dr. Joshi',
    expertise: 'Gynecology',
    city: 'Pune'
  },
  {
    name: 'Dr. Kumar',
    expertise: 'Neurology',
    city: 'Jaipur'
  },
  {
    name: 'Dr. Malhotra',
    expertise: 'Dentistry',
    city: 'Lucknow'
  },
  {
    name: 'Dr. Agarwal',
    expertise: 'Psychiatry',
    city: 'Indore'
  },
  {
    name: 'Dr. Chakraborty',
    expertise: 'Radiology',
    city: 'Kanpur'
  },
  {
    name: 'Dr. Dave',
    expertise: 'Urology',
    city: 'Surat'
  },
  {
    name: 'Dr. Ghosh',
    expertise: 'Nephrology',
    city: 'Nagpur'
  },
  {
    name: 'Dr. Jain',
    expertise: 'Anesthesiology',
    city: 'Bhopal'
  },
  {
    name: 'Dr. Khandelwal',
    expertise: 'Pathology',
    city: 'Rajkot'
  },
  {
    name: 'Dr. Mishra',
    expertise: 'Microbiology',
    city: 'Bhubaneswar'
  },
  {
    name: 'Dr. Nair',
    expertise: 'Physiotherapy',
    city: 'Kochi'
  },
  {
    name: 'Dr. Oberoi',
    expertise: 'Pulmonology',
    city: 'Chandigarh'
  },
  {
    name: 'Dr. Patwardhan',
    expertise: 'Gastroenterology',
    city: 'Thane'
  },
  {
    name: 'Dr. Qureshi',
    expertise: 'Hematology',
    city: 'Bhubaneswar'
  },
  {
    name: 'Dr. Rao',
    expertise: 'Oncology',
    city: 'Coimbatore'
  },
  {
    name: 'Dr. Sahu',
    expertise: 'Endocrinology',
    city: 'Cuttack'
  },
  {
    name: 'Dr. Tandon',
    expertise: 'Virology',
    city: 'Agra'
  },
  {
    name: 'Dr. Unnikrishnan',
    expertise: 'Hepatology',
    city: 'Thiruvananthapuram'
  },
  {
    name: 'Dr. Vyas',
    expertise: 'Immunology',
    city: 'Udaipur'
  },
  {
    name: 'Dr. Wadhwa',
    expertise: 'Genetics',
    city: 'Faridabad'
  },
  {
    name: 'Dr. Xavier',
    expertise: 'Laboratory Medicine',
    city: 'Goa'
  },
  {
    name: 'Dr. Yadav',
    expertise: 'Forensic Medicine',
    city: 'Ghaziabad'
  },
  {
    name: 'Dr. Zaveri',
    expertise: 'Nuclear Medicine',
    city: 'Vadodara'
  },
  {
    name: 'Dr. Ahluwalia',
    expertise: 'Anaesthesiology',
    city: 'Ludhiana'
  },
  {
    name: 'Dr. Bhatia',
    expertise: 'Dermatology',
    city: 'Jalandhar'
  },
  {
    name: 'Dr. Chatterjee',
    expertise: 'Emergency Medicine',
    city: 'Kolkata'
  },
  {
    name: 'Dr. Dhawan',
    expertise: 'Neurosurgery',
    city: 'Gurgaon'
  },
  {
    name: 'Dr. Eapen',
    expertise: 'Obstetrics',
    city: 'Kozhikode'
  },
  {
    name: 'Dr. Firodia',
    expertise: 'Radiation Oncology',
    city: 'Pune'
  },
  {
    name: 'Dr. Garg',
    expertise: 'Plastic Surgery',
    city: 'Noida'
  },
  {
    name: 'Dr. Handa',
    expertise: 'Psychiatry',
    city: 'Mohali'
  },
  {
    name: 'Dr. Iyengar',
    expertise: 'Obstetrics and Gynecology',
    city: 'Bangalore'
  },
  {
    name: 'Dr. Jaiswal',
    expertise: 'Ophthalmology',
    city: 'Ranchi'
  },
  {
    name: 'Dr. Kadam',
    expertise: 'Pediatric Surgery',
    city: 'Solapur'
  },
  {
    name: 'Dr. Lal',
    expertise: 'Cardiothoracic Vascular Surgery',
    city: 'Jaipur'
  },
  {
    name: 'Dr. Mittal',
    expertise: 'Medical Genetics',
    city: 'New Delhi'
  },
  {
    name: 'Dr. Nambiar',
    expertise: 'Neonatology',
    city: 'Kochi'
  },
  {
    name: 'Dr. Ojha',
    expertise: 'Colorectal Surgery',
    city: 'Bhopal'
  },
  {
    name: 'Dr. Panwar',
    expertise: 'Transfusion Medicine',
    city: 'Dehradun'
  },
  {
    name: 'Dr. Qureshi',
    expertise: 'Clinical Pharmacology',
    city: 'Hyderabad'
  },
  {
    name: 'Dr. Rai',
    expertise: 'Critical Care Medicine',
    city: 'Mumbai'
  },
  {
    name: 'Dr. Sabharwal',
    expertise: 'Medical Oncology',
    city: 'Chandigarh'
  },
  {
    name: 'Dr. Tewari',
    expertise: 'Sports Medicine',
    city: 'Lucknow'
  },
  {
    name: 'Dr. Unnikrishnan',
    expertise: 'Medical Biochemistry',
    city: 'Thiruvananthapuram'
  },
  {
    name: 'Dr. Vishwanathan',
    expertise: 'Maxillofacial Surgery',
    city: 'Chennai'
  },
  {
    name: 'Dr. Wadhwa',
    expertise: 'Preventive Medicine',
    city: 'Faridabad'
  },
  {
    name: 'Dr. Xavier',
    expertise: ' Medical Microbiology',
    city: 'Goa'
  },
  {
    name: 'Dr. Yadav',
    expertise: 'Respiratory Medicine',
    city: 'Ghaziabad'
  },
  {
    name: 'Dr. Zaveri',
    expertise: 'Surgical Oncology',
    city: 'Vadodara'
  }
]

export default doctorData
