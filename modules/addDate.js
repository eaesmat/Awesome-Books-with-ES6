import { DateTime } from './luxon.js';

const manageDate = () => {
  const datePara = document.createElement('p');
  const displayData = document.querySelector('.date-display');
  const now = DateTime.now();
  const date = now.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
  datePara.innerHTML = date;
  displayData.appendChild(datePara);
};

export default manageDate;
