document.getElementById('testButton').addEventListener('click', function() {
    // Create a div element that simulates an ad
    const testDiv = document.createElement('div');
    testDiv.id = 'ad-test-div';
    testDiv.style.display = 'none'; // Hide the element to simulate an ad
    document.body.appendChild(testDiv);

    const resultDiv = document.getElementById('result');
    setTimeout(function() {
        // If the ad element is hidden, the ad blocker is active
        if (testDiv.offsetHeight === 0) {
            resultDiv.innerHTML = 'It seems that your ad blocker is active.';
        } else {
            resultDiv.innerHTML = 'No ad blocker detected. Ads may be displayed on websites.';
        }

        // Clean up the test element after checking
        document.body.removeChild(testDiv);
    }, 1000); // Check after 1 second
});
