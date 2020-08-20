//This is the starting data (My shopping cart that my software can already make)

let cart = [
	{
		Activty: "climbing",
		Price: "25",
		Date: "28/09/20",
		Time: "9:30 - 11:00",
	},
	{
		Activty: "kayaking",
		Price: "45",
		Date: "28/09/20",
		Time: "14:30 - 16:00",
	},
	{
		Activty: "Zip Wire",
		Price: "20",
		Date: "29/09/20",
		Time: "9:30 - 11:00",
	},
];

//This is the data I want to store in local storage

let temp = {
	"28/09/20": {
		"9:30 - 11:00": true,
		"14:30 - 16:00": true,
	},
	"29/09/20": {
        "9:30 - 11:00": true,
    }
};


function moveToLS(arr) {
    arr.forEach(booking => {
        let date = booking.Date

        if(typeof ls[date] === 'undefined') { 
           ls[date] = {}
        } 
        ls[date][booking.Time] = true
    });
}

ls = {}

moveToLS(cart)

// if the date 