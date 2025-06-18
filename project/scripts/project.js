const discType = document.querySelector("#discTypes")
const discDescription = document.querySelector(".description")
const discInfo = document.getElementById("discInfo")

const discs = [
    {
        name: "Driver",
        description: ["A driver disc in disc golf is designed for maximum distance and speed, making it the go-to choice for tee shots and long fairway throws. These discs have a sharp, aerodynamic edge and a wide rim, allowing them to cut through the air efficiently and travel farther than other disc types.",
        "There are two main categories of drivers: distance drivers and fairway (or control) drivers. Distance drivers are built for sheer power and can cover the most ground, but they require a strong, fast throw to perform well. Fairway drivers, on the other hand, offer more control and are ideal for precision shots that still need decent range.",
        "Because of their high-speed design, driver discs can be more challenging for beginners to control, but they’re essential for players looking to improve their long game. With a variety of stability options—ranging from understable to overstable—drivers can be tailored to suit different throwing styles and wind conditions."]

    },

    {
        name: "Mid-Range",
        description: ["A mid-range disc in disc golf is the versatile workhorse of your bag—perfect for controlled, accurate throws that don’t require the full power of a driver. It bridges the gap between drivers and putters, offering a balance of distance, control, and glide.",
        "Mid-range discs typically have a moderate rim width and a more rounded edge, which makes them easier to grip and throw consistently. They’re ideal for approach shots, tight fairways, and technical lines where precision matters more than power. Most players use them for throws in the 200–300 foot range, though that can vary based on skill and strength.",
        "Because of their straight flight paths and predictable fade, mid-ranges are especially beginner-friendly. They help new players develop good form while still being reliable tools for experienced throwers navigating wooded courses or shaping specific lines."]
    },

    {
        name:"Putter",
        description: [" A putter disc is the most accurate and slowest-flying disc in a disc golfer’s bag, designed for short-range throws and—of course—putting into the basket. With a blunt, rounded edge and a deep rim, putters offer exceptional control and a predictable flight path, making them ideal for precision shots within 100–150 feet.",
        "Putters are also great for approach shots, especially when you want the disc to land softly without skipping or rolling too far. Their slower speed and high glide help them stay on course, even with less power behind the throw. Many players also use putters for technical throws in wooded areas or for learning proper throwing form.",
        "Because of their forgiving nature and consistent flight, putters are often recommended for beginners—but they remain a trusted tool for advanced players too. Whether you're sinking a clutch putt or threading a tight gap, the putter is all about control, confidence, and finesse"]
    }
]

function discList(){
    discs.forEach(disc =>{
        let option = document.createElement("option");
        option.value = disc.name;
        option.textContent = disc.name;
        discType.appendChild(option);
    })
};

discList();

discType.addEventListener("change", (event) => {
    const selectedName = event.target.value;
    const selectedDisc = discs.find(disc => disc.name === selectedName);
    discDescription.innerHTML="";
    
    selectedDisc.description.forEach(info => {
        const information = document.createElement("p");
        information.textContent = info;
        discDescription.appendChild(information);
    });

});



