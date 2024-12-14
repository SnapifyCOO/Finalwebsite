// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Lucide icons
    lucide.createIcons();

    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Video functionality
    const watchVideoBtn = document.getElementById('watch-video-btn');
    const youtubeEmbed = document.getElementById('youtube-embed');
    const videoError = document.getElementById('video-error');

    if (watchVideoBtn && youtubeEmbed) {
        watchVideoBtn.addEventListener('click', function() {
            document.getElementById('video-demo').scrollIntoView({behavior: 'smooth'});
        });

        youtubeEmbed.addEventListener('error', function() {
            if (videoError) {
                videoError.classList.remove('hidden');
            }
        });
    }

    // Calendly integration
    const contactUsBtn = document.getElementById('contact-us-btn');
    const calendlyWidget = document.getElementById('calendly-widget');
    const calendlyClose = document.querySelector('.calendly-close-overlay');

    if (contactUsBtn && calendlyWidget) {
        contactUsBtn.addEventListener('click', function() {
            calendlyWidget.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Prevent scrolling when widget is open
        });

        if (calendlyClose) {
            calendlyClose.addEventListener('click', function() {
                calendlyWidget.style.display = 'none';
                document.body.style.overflow = ''; // Restore scrolling
            });
        }
    }

    // Learn more functionality
    const learnMoreBtn = document.querySelector('button.bg-brown-500');
    if (learnMoreBtn) {
        learnMoreBtn.addEventListener('click', function() {
            // Here you would typically show more information or redirect to a details page
            alert('More information about who we serve: We specialize in helping food entrepreneurs take their business to the next level.');
        });
    }

    // Accessibility improvements
    const interactiveElements = document.querySelectorAll('button, a');
    interactiveElements.forEach(element => {
        if (!element.getAttribute('aria-label') && !element.textContent.trim()) {
            const icon = element.querySelector('[data-lucide]');
            if (icon) {
                element.setAttribute('aria-label', icon.getAttribute('data-lucide'));
            }
        }
    });

    // Handle window resize for mobile menu
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 768) {
            mobileMenu.classList.add('hidden');
        }
    });
});