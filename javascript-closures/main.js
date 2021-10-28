const graduate = credential => fullName => {
  console.log(`${fullName}, ${credential}`);
};

const medicalSchool = graduate('M.D.');
const lawSchool = graduate('Esq.');

medicalSchool('Tina Park');
lawSchool('TIna Park');
