// Sets the result field
function writePirateResponse(contents) {
    if(!contents || contents.length < 1){
        contents = 'translation not found';
    }
    document.getElementById('results').value = contents;
}

// Calls the pirate translation API
function triggerPirateTranslation(searchTerm) {
    const url = 'https://api.funtranslations.com/translate/pirate?text='+searchTerm;
    fetch(url)
        .then(data => data.json()
            .then(result => writePirateResponse(result.contents.translated)))
        .catch(err => {
            console.log(err);
            writePirateResponse('Something went wrong while translating');
        });
}

// Read the search term, validate that it is not empty and pass it to the translate method
function triggerTranslation() {
    var searchTerm = document.getElementById('searchTerm').value;
    if(searchTerm && searchTerm.length > 0) {
        triggerPirateTranslation(searchTerm);
    }
    else{
        writePirateResponse('Please provide a sentence!')
    }
}


// Link button to event listener + define method being called
(function(){
    document.getElementById('translate').addEventListener('click',
        function(){
            triggerTranslation();
        })
})();
