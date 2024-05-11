let nextBtn = document.querySelector('.next');
let prevBtn = document.querySelector('.prev');

let slider = document.querySelector('.slider');
let sliderList = slider.querySelector('.list');
let thumbnail = document.querySelector('.thumbnail');

// Function for next button 
nextBtn.onclick = function() {
    moveSlider('next');
};

// Function for prev button 
prevBtn.onclick = function() {
    moveSlider('prev');
};

function moveSlider(direction) {
    let sliderItems = sliderList.querySelectorAll('.item');
    let thumbnailItems = document.querySelectorAll('.thumbnail .item');
    
    if (direction === 'next') {
        sliderList.appendChild(sliderItems[0]);
        thumbnail.appendChild(thumbnailItems[0]);
        slider.classList.add('next');
    } else {
        sliderList.prepend(sliderItems[sliderItems.length - 1]);
        thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1]);
        slider.classList.add('prev');
    }

    // Remove the animation class after the animation ends
    slider.addEventListener('animationend', function() {
        if (direction === 'next') {
            slider.classList.remove('next');
        } else {
            slider.classList.remove('prev');
        }
    }, { once: true }); // Remove the event listener after it's triggered once
}
 const blogs = [
            {
                image: "image1.jpg",
                title: "Blog 1",
                content: "Aenean ullamcorper nibh nec urna facilisis, at varius dui dignissim. Nulla facilisi. Donec id elit nisi. Nulla facilisi. Nulla libero metus, ultrices in eros non, molestie venenatis neque."
            },
            {
                image: "image2.jpg",
                title: "Blog 2",
                content: "Proin id ipsum at sapien malesuada mattis. Aliquam erat volutpat. Proin dapibus semper nulla, vitae gravida orci dapibus eget. Quisque sollicitudin libero vel lectus vestibulum, sit amet vehicula quam ullamcorper."
            },
            {
                image: "image3.jpg",
                title: "Blog 3",
                content: "Praesent ut semper elit. Sed non nisl nec mi finibus pretium. Duis suscipit urna non velit convallis, vel bibendum velit volutpat. Suspendisse potenti."
            }
        ];

        let currentPage = 0;
        const blogsPerPage = 3;

        const blogsContainer = document.getElementById('blogs');

        function renderBlogs() {
            const start = currentPage * blogsPerPage;
            const end = start + blogsPerPage;
            const currentBlogs = blogs.slice(start, end);

            blogsContainer.innerHTML = '';

            currentBlogs.forEach(blog => {
                const blogElement = `
                    <div class="bg-white rounded-lg shadow-md p-4">
                        <img src="${blog.image}" alt="${blog.title}" class="mb-4">
                        <h2 class="text-lg font-bold mb-2">${blog.title}</h2>
                        <p>${blog.content}</p>
                    </div>
                `;
                blogsContainer.innerHTML += blogElement;
            });

            document.getElementById('previousBtn').disabled = currentPage === 0;
            document.getElementById('nextBtn').disabled = currentPage === Math.ceil(blogs.length / blogsPerPage) - 1;
        }

        document.getElementById('previousBtn').addEventListener('click', () => {
            if (currentPage > 0) {
                currentPage--;
                renderBlogs();
            }
        });

        document.getElementById('nextBtn').addEventListener('click', () => {
            if (currentPage < Math.ceil(blogs.length / blogsPerPage) - 1) {
                currentPage++;
                renderBlogs();
            }
        });

        renderBlogs();


document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.querySelector('[data-hs-collapse="#navbar-collapse-with-animation"]');
    const navbarCollapse = document.getElementById('navbar-collapse-with-animation');

    toggleButton.addEventListener('click', function() {
      navbarCollapse.classList.toggle('hidden');
      navbarCollapse.classList.toggle('grow');
    });

    // Dropdown menu ke liye
    const dropdownButtons = document.querySelectorAll('.hs-dropdown button');

    dropdownButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        const submenu = button.nextElementSibling;

        submenu.classList.toggle('hidden');
        submenu.classList.toggle('grow');
      });
    });
  });











