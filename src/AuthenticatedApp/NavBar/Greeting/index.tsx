import { Typography } from '@mui/material';

export const greetings = {
  morningGreeting: 'good morning',
  afternoonGreeting: 'good afternoon',
  nightGreeting: 'good night'
};

export const getPartOfTheDay = (hour: number) => {
  const isMorning = hour >= 6 && hour < 12;
  const isAfternoon = hour >= 12 && hour <= 18;

  if (isMorning) {
    return greetings.morningGreeting;
  }
  if (isAfternoon) {
    return greetings.afternoonGreeting;
  }

  return greetings.nightGreeting;
};

const Greeting = () => (
  <Typography variant='caption'>
    {`${getPartOfTheDay(new Date().getHours())} noga`}
  </Typography>
);

export default Greeting;