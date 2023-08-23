import moment from 'moment';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export default (timestamp, format) => moment(timestamp).format(format);
