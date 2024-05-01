document.addEventListener("DOMContentLoaded", function () {
    var categoryItems = document.querySelectorAll(".category-item");
    categoryItems.forEach(function (item) {
        item.addEventListener("click", function () {
            var description = this.getAttribute("data-description");
            const styles = {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center', 
            };
            
            Object.assign(document.getElementById("categoryModal").style, styles);
            document.getElementById("fileContent").textContent = description; 

            var read = document.createElement("button");
            read.id = "readArticlesBtn";
            read.textContent = "Read Articles";
            read.onclick = function () {
                console.log("Read Articles button clicked");
            }

            var post = document.createElement("button");
            post.id = "postWorkBtn"; 
            post.textContent = "Post Your Work!";
            post.onclick = function () {
                console.log("Post Your Work clicked");
            }

            // Once the database is connected to the website, I shall add the functionalities of the above buttons.

            var modalContent = document.getElementById("fileContent");
            modalContent.appendChild(read);
            modalContent.appendChild(post);
        });
    });

    var modal = document.getElementById("categoryModal");
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function () {
        modal.style.display = "none";
    };

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
});
function popup() {
    window.location.href = "login.html";
}
