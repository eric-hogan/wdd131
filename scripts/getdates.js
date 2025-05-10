//   <footer> 
//       <p id="currentyear"> &copy; <span  id="currentyear"></span> Eric Hogan USA</p>

//   <p><span id="lastModified"></span></p>
//     </footer> 

document.addEventListener('DOMContentLoaded', function () {
    const year = new Date().getFullYear();
    const currentyear = document.getElementById('currentyear');
    if (currentyear) {currentyear.textContent = year;}
})


document.addEventListener('DOMContentLoaded', function() {
    const lastmodifieddate = new Date(document.lastModified);
    const formattedDate = lastmodifieddate.toDateString();
    const lastModifiedspan = document.getElementById ('last-modified');

    if (lastModifiedspan) { lastModifiedspan.textContent =formattedDate}
})




