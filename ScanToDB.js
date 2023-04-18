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

      //log to database:
      const components = booking[i].innerHTML.split(' at ');
      const booking_date = components[0];
      const timeAndLocation = components[1];
      const booking_time =
        timeAndLocation.split(' ')[1] + ' ' + timeAndLocation.split(' ')[2];
      const booking_location = timeAndLocation.split(' ').slice(3).join(' ');

      var myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');

      var raw = JSON.stringify({
        spotted_at: current_date + ' ' + current_time,
        scheduled_at: booking_time,
        day_of: booking_date,
        location_name: booking_location,
      });
      [];
      console.log(raw);

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
      };

      fetch(
        'https://dot-graphing-api-default-rtdb.asia-southeast1.firebasedatabase.app/booking/.json',
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log('error', error));
    }
  }
}, 20000);
x;
