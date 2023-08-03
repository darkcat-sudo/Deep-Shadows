const firebaseConfig = {
    apiKey: "AIzaSyDmS4HPya4h91TCPDzlE8dBh89yX4VOVOo",
    authDomain: "info-videos-95b33.firebaseapp.com",
    databaseURL: "https://info-videos-95b33-default-rtdb.firebaseio.com",
    projectId: "info-videos-95b33",
    storageBucket: "info-videos-95b33.appspot.com",
    messagingSenderId: "863795710141",
    appId: "1:863795710141:web:7e0302adea449f6c250fd4"
  };
  firebase.initializeApp(firebaseConfig);
  // Get a reference to Firestore
  var db = firebase.firestore();



 // initialize firebase
 
 function extractValues(input) {
  var values = [];
  var regex = /\[(.*?)\]/g;
  var match;

  // If the input contains square brackets, extract values inside them
  while ((match = regex.exec(input)) !== null) {
    values.push(match[1].trim());
  }

  // If no values were found in square brackets, use the input as is
  if (values.length === 0 && input.trim() !== '') {
    values.push(input.trim());
  }

  return values;
}

document.getElementById('videoForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Get form values
  var numInput = document.getElementById('num').value;
  var titlesInput = document.getElementById('titles').value;
  var link_idInput = document.getElementById('link_id').value;
  var sourceInput = document.getElementById('source').value;
  var thumbnailInput = document.getElementById('thumbnail').value;
  var uploaderInput = document.getElementById('uploader').value;
  var uploader_picInput = document.getElementById('uploader_pic').value;

  // Extract values from all labels (handles both single values and values inside square brackets)
  var numArray = extractValues(numInput);
  var titlesArray = extractValues(titlesInput);
  var link_idArray = extractValues(link_idInput);
  var sourceArray = extractValues(sourceInput);
  var thumbnailArray = extractValues(thumbnailInput);
  var uploaderArray = extractValues(uploaderInput);
  var uploader_picArray = extractValues(uploader_picInput);

  // Check if all required fields have valid values
  if (!numArray.length || !titlesArray.length || !link_idArray.length || !sourceArray.length || !thumbnailArray.length || !uploaderArray.length || !uploader_picArray.length) {
    console.error('Please fill in all required fields.');
    return;
  }

  // Determine the maximum number of form entries based on the field with the most grabbed values
  var maxEntries = Math.max(numArray.length, titlesArray.length, link_idArray.length, sourceArray.length, thumbnailArray.length, uploaderArray.length, uploader_picArray.length);

  // Create a new form entry for each set of grabbed values
  for (var i = 0; i < maxEntries; i++) {
    // Create an object to store form data
    var videoData = {
      num: numArray[i] || '',
      title_: titlesArray[i] || '',
      link_id: link_idArray[i] || '',
      source_: sourceArray[i] || '',
      thumanil_link: thumbnailArray[i] || '',
      uploader_: uploaderArray[i] || '',
      up_pic_link: uploader_picArray[i] || ''
    };

    // Send data to Firestore
    db.collection('videos_data').add(videoData)
      .then(function(docRef) {
        console.log('Document written with ID: ', docRef.id);
      })
      .catch(function(error) {
        console.error('Error adding document: ', error);
      });
  }

  // Clear the form after successful submission
  document.getElementById('videoForm').reset();
});