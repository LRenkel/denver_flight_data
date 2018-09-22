# denver_flight_data
group project 2

We pulled a series of datasets from OpenFlights on airline, airports and routes, then creatively figured out how to merge them together into one dataset allowing us to create a map of flight routes, by airline. To reduce the amount of data we were dealing with we decided to limit it to only flights originating from Denver. We used Pandas to clean and merge the datasets and export to geoJSON data so we could graph it. Using Leaflet.js we created a multilayer map graphing the top few airlines' routes/destinations, and also breaking it down to domestic/international, and adding a pop-up giving the name of the airport.
The biggest challenge in this portion was mainly related to getting an accurate dataset to work with. The individual datasets had similar columns and codes but they were used differently across the data and keeping origin airport and destination airport separate throughout the process took precision.

The other main piece of this project included featuring a user-driven search of current flight deals. It is designed for the flexible travel who wants to see what deals are available in a given month. Enter the city code of departure, the month of travel and the country you'd like to travel to and a list of deals is returned in a javascript-driven table. 
The challenge in this piece of the project was scraping and filtering SkyScanner website. An API made the scraping easier however every possible destination in the database was returned whether flying there was an option or not. To resolve this we had to filter the returned data based on whether there was an image URL included (because only valid destinations included an image on the website) then further by direct and multi-stop pricing criteria.

Both pieces are compiled onto a website running with Flask

![Denver Routes Map](/DenRoutes.png?raw=true "Airlines Flying Out of Denver")


![flight deals](/deals.png?raw=true "current deals from Denver in December")
