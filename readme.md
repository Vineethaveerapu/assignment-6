The page needs to have at least one event that triggers the initial API call. This could be a 'start' button, or a 'search' field with a submit button or something similar. On firing the event an AJAX request is made to an API and data is returned. The data must be a JSON object and not a simple string.

The data that is returned from the call must be dynamically displayed on the page. You can populate pre-existing elements or dynamically create elements.

The specifications will depend somewhat on your choice of API.

Connect to an API in a user fired event

Make a request for data

Handle the returned data in an efficient manner

Display more than one property of the returned data on the page

The page must be responsive

Have correct error handling when fetching the data

Append arguments to the request

Multiple calls to the API - eg have a input field that will generate different arguments and a button that fires the request
