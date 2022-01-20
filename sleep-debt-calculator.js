const getSleepHours = (day) => {
    day = day.toLowerCase(); 
  
    switch (day) {
      case 'monday':
        return 6;
        break;
      case 'tuesday':
        return 3;
        break;
      case 'wednesday':
        return 7;
        break;
      case 'thursday':
        return 7;
        break;
      case 'friday':
        return 4;
        break;
      case 'saturday':
        return 6;
        break;
      case 'sunday':
        return 5;
        break;            
    }
  }
  
  
  const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
  
  const getIdealSleepHours = (idealHours) => {
    return idealHours *= 7;
  }
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours(8);
  
    if (actualSleepHours === idealSleepHours) {
      console.log('You got the perfect amount of sleep.');
    } else if (actualSleepHours > idealSleepHours) {
      console.log(`You got over ${actualSleepHours - idealSleepHours} hours more sleep than needed.`);
    } else if (actualSleepHours < idealSleepHours) {
      console.log(`You are getting ${idealSleepHours - actualSleepHours} hours less sleep than you should. Get some more sleep.`);
    }
  }
  
  calculateSleepDebt();
  
  
  
  