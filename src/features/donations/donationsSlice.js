import { DONATIONS } from '../../app/shared/DONATIONS';

export const selectAllDonations = () => {
  return DONATIONS;
};

export const selectDonationById = (id) => {
  return DONATIONS.find((donation) => donation.id === id);
};

/*
export const selectFeaturedDonation = () => {
  return DONATIONS.filter((donation) => donation.featured === 'true');
};

export const selectRandomDonation = () => {
  return DONATIONS[Math.floor(DONATIONS.length * Math.random())];
};
*/
