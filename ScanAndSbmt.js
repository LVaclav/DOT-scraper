myIntervel = setInterval(function () {
  var now = new Date();
  var current_time = now.toLocaleTimeString();
  var current_date = now.toLocaleDateString();

  try {
    //change 'id8' to 'idb' if you are using the change booking interface
    document.getElementById('id8').click();
    let state = document.getElementsByClassName('feedbackPanelERROR');
    let stateParsed = state[0].innerText;
    var noBook =
      'Sorry, there are no bookings available for the date requested. Please alter your requested booking date and try again.';

    console.log('nada ' + current_time);
  } catch (err) {
    let booking = document.querySelectorAll('#searchResultRadioLabel');
    console.log('These results appeared at ' + current_time + ' :');
    for (let i = 0; i < booking.length; i++) {
      console.log(booking[i].innerHTML);

      //define components
      const components = booking[i].innerHTML.split(' at ');
      const booking_date = components[0];
      const timeAndLocation = components[1];
      const booking_time_12h =
        timeAndLocation.split(' ')[1] + ' ' + timeAndLocation.split(' ')[2];
      const booking_location = timeAndLocation.split(' ').slice(3).join(' ');
      [];
      //convert time to 24 hr
      var time = booking_time;
      var hours = Number(time.match(/^(\d+)/)[1]);
      var minutes = Number(time.match(/:(\d+)/)[1]);
      var AMPM = time.match(/\s(.*)$/)[1];
      if (AMPM == 'PM' && hours < 12) hours = hours + 12;
      if (AMPM == 'AM' && hours == 12) hours = hours - 12;
      var sHours = hours.toString();
      var sMinutes = minutes.toString();
      if (hours < 10) sHours = '0' + sHours;
      if (minutes < 10) sMinutes = '0' + sMinutes;
      var booking_time_24h = sHours + ':' + sMinutes;

      //Define user properties
      //example values!!!
      let conditions = {
        date_range_start: '01/2/2023',
        date_range_end: '01/3/2023',
        time_range_start: '8:30',
        time_range_end: '14:50',
      };
      //user conditions met? Might not be neccessary
      // var date_condition_met = false;
      // var time_condition_met = false;

      //check if user conditions are met
      if (booking_date > date_range_end && booking_date < date_range_start) {
        // let date_condition_met = true;
        if (
          booking_time_24h > time_range_start &&
          booking_time_24h < time_range_end
        ) {
          
          // let time_condition_met = true;
        }
      }
    }
  }
}, 20000);
x;
