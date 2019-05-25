import moment from 'moment';

export default function(measurements) {
    const latestDatesList = measurements.map((measurement) => {
        return moment(measurement.lastUpdated);
    })

    const latestMoment = moment.max(latestDatesList)

      return timeDescription(latestMoment);

};

function timeDescription (time) {
    try {
        const details = moment.duration(moment().diff(time));
        const data = details['_data']
        console.log(data);
        if (data.years) {
            return `Updated ${data.years} years ago`;
        }
        if (data.months) {
            return `Updated ${data.months} months ago`;
        }
        if (data.days === 7) {
            return `Updated a week ago`;
        }
        if (data.days > 7) {
            return `Updated ${Math.floor(data.days/7)} weeks ago`;
        }
        if (data.days === 1) {
            return `Updated ${data.days} day ago`;
        }
        if (data.days < 7 && data.days !== 0) {
            return `Updated ${data.days} days ago`;
        }
        if (data.hours === 1) {
            return `Updated ${data.hours} hour ago`;
        }
        if (data.hours) {
            return `Updated ${data.hours} hours ago`;
        }

        return null;

    }
    catch (e){
        return null;
    }
    
}