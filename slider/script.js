const slider = document.querySelector('.slider');
        const slides = document.querySelectorAll('.slide');
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');
        const dots = document.querySelectorAll('.dot');

        let currentSlide = 0;
        const totalSlides = slides.length;

        // Function to update slide position
        function updateSlide() {
            slider.style.transform = `translateX(-${currentSlide * 100}%)`;
            
            // Update dots
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentSlide);
            });
        }

        // Next slide function
        function nextSlide() {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateSlide();
        }

        // Previous slide function
        function prevSlide() {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            updateSlide();
        }

        // Event listeners for buttons
        nextBtn.addEventListener('click', nextSlide);
        prevBtn.addEventListener('click', prevSlide);



        // Auto-slide every 5 seconds
        let autoSlide = setInterval(nextSlide, 5000);

        // Pause auto-slide when hovering over slider
        slider.addEventListener('mouseenter', () => {
            clearInterval(autoSlide);
        });

        // Resume auto-slide when mouse leaves slider
        slider.addEventListener('mouseleave', () => {
            autoSlide = setInterval(nextSlide, 5000);
        });