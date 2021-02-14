import Airtable from 'airtable';

const base = new Airtable({ apiKey: process.env.GATSBY_AIRTABLE_API })
  .base(process.env.GATSBY_AIRTABLE_BASE_ID);

async function getRecords() {
  return await base('Survey')
    .select({})
    .firstPage()
    .catch((err) => console.log(err));
}

async function updateRecords(newRecords) {
  return await base('Survey')
    .update(newRecords)
    .catch((err) => console.log(err));
}

export { getRecords, updateRecords };