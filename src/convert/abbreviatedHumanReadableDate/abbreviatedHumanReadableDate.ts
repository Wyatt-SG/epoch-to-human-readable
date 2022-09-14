import { TimeConversionFn } from '../../types/TimeConversionFn';
import { currentEpoch } from '../utils';

const toAbbreviatedHumanReadableDate: TimeConversionFn = (epoch) => {
  if (currentEpoch - 86400000 <= epoch) return 'Today'

  if (currentEpoch - 172800000 <= epoch) return 'Yesterday'

  if (new Date().getFullYear() === new Date(epoch).getFullYear()) {
    return new Date(epoch).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
    }) 
  }

  return new Date(epoch).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  })
};

export default toAbbreviatedHumanReadableDate;
