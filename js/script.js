// ===== DOCUMENT READY =====
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functions
    initNavbar();
    initCountdown();
    initSmoothScrolling();
    initVideoPlayer();
    initGallery();
    initGiftSection();
    initAnimations();
    initBackgroundMusic();
    initFloatingHearts();
});

// ===== NAVBAR FUNCTIONALITY =====
function initNavbar() {
    const navbar = document.getElementById('mainNav');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// ===== COUNTDOWN TIMER =====
function initCountdown() {
    // Set wedding date (change this to your actual wedding date)
    const weddingDate = new Date('2025-07-01T15:30:00').getTime();
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = weddingDate - now;
        
        if (distance > 0) {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            document.getElementById('days').textContent = days.toString().padStart(2, '0');
            document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
            document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
            document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
        } else {
            // Wedding day has arrived!
            document.getElementById('days').textContent = '00';
            document.getElementById('hours').textContent = '00';
            document.getElementById('minutes').textContent = '00';
            document.getElementById('seconds').textContent = '00';
        }
    }
    
    // Update countdown every second
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// ===== SMOOTH SCROLLING =====
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Calculate navbar offset based on screen size
                let navbarOffset = 80; // Default for desktop
                if (window.innerWidth <= 480) {
                    navbarOffset = 110; // Extra small screens
                } else if (window.innerWidth <= 768) {
                    navbarOffset = 100; // Mobile screens
                } else if (window.innerWidth <= 992) {
                    navbarOffset = 90; // Tablet screens
                }

                const offsetTop = targetSection.offsetTop - navbarOffset;

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                    bsCollapse.hide();
                }
            }
        });
    });
}

// ===== VIDEO PLAYER =====
function initVideoPlayer() {
    const videoPlaceholder = document.querySelector('.video-placeholder');
    const videoIframe = document.getElementById('wedding-video');
    
    if (videoPlaceholder) {
        videoPlaceholder.addEventListener('click', function() {
            // Replace with your actual YouTube video ID
            const videoId = 'dQw4w9WgXcQ'; // Example video ID
            const videoSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
            
            videoIframe.src = videoSrc;
            videoIframe.style.display = 'block';
            videoPlaceholder.style.display = 'none';
        });
    }
}

// ===== GALLERY FUNCTIONALITY =====
function initGallery() {
    // List of gallery images (auto-loaded from directory)
    const galleryImages = [
        '0S7A6388.JPG',
        '0S7A6411.JPG',
        '0S7A6517.JPG',
        '0S7A6560.JPG',
        '0S7A7118.JPG',
        '0S7A6613.JPG',
        '0S7A6820.JPG',
        '0S7A6883.JPG',
        '0S7A6924.JPG',
        '0S7A6983.JPG',
        '0S7A7029.JPG',
        '0S7A7097.JPG',
        '0X5A6054.JPG'
    ];

    const galleryContainer = document.getElementById('galleryContainer');

    // Create gallery items dynamically
    galleryImages.forEach((imageName, index) => {
        const galleryItem = createGalleryItem(imageName, index + 1);
        galleryContainer.appendChild(galleryItem);
    });

    // Add click event listeners to all gallery items
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            const imgSrc = img.src;
            const imgAlt = img.alt;

            // Create modal for image preview
            createImageModal(imgSrc, imgAlt);
        });
    });

    // Optimize masonry layout after images load
    optimizeMasonryLayout();

    // Re-optimize layout on window resize
    window.addEventListener('resize', debounce(optimizeMasonryLayout, 250));
}

function createGalleryItem(imageName, index) {
    const galleryItem = document.createElement('div');
    galleryItem.className = 'gallery-item';

    const img = document.createElement('img');
    img.src = `images/gallerys/${imageName}`;
    img.alt = `Wedding Photo ${index}`;
    img.className = 'img-fluid';

    const overlay = document.createElement('div');
    overlay.className = 'gallery-overlay';
    overlay.innerHTML = '<i class="fas fa-search-plus"></i>';

    galleryItem.appendChild(img);
    galleryItem.appendChild(overlay);

    // Add loading effect
    img.addEventListener('load', function() {
        galleryItem.style.opacity = '1';
        galleryItem.style.transform = 'scale(1)';
    });

    // Set initial loading state
    galleryItem.style.opacity = '0';
    galleryItem.style.transform = 'scale(0.8)';
    galleryItem.style.transition = 'all 0.5s ease';

    return galleryItem;
}

// Function to optimize masonry layout
function optimizeMasonryLayout() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const container = document.getElementById('galleryContainer');

    // Add a small delay to ensure images are loaded
    setTimeout(() => {
        galleryItems.forEach(item => {
            const img = item.querySelector('img');
            if (img.complete) {
                item.style.opacity = '1';
                item.style.transform = 'scale(1)';
            }
        });
    }, 100);
}

function createImageModal(src, alt) {
    // Create modal HTML
    const modalHTML = `
        <div class="modal fade" id="imageModal" tabindex="-1">
            <div class="modal-dialog modal-lg modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">${alt}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body text-center">
                        <img src="${src}" alt="${alt}" class="img-fluid">
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Remove existing modal if any
    const existingModal = document.getElementById('imageModal');
    if (existingModal) {
        existingModal.remove();
    }
    
    // Add modal to body
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Show modal
    const modal = new bootstrap.Modal(document.getElementById('imageModal'));
    modal.show();
    
    // Remove modal from DOM when hidden
    document.getElementById('imageModal').addEventListener('hidden.bs.modal', function() {
        this.remove();
    });
}

// ===== GIFT SECTION =====
function initGiftSection() {
    const qrCards = document.querySelectorAll('.qr-card');

    qrCards.forEach(card => {
        card.addEventListener('click', function() {
            // Add click effect
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);

            // Copy account number to clipboard
            const accountNumber = this.querySelector('.account-number').textContent;
            copyToClipboard(accountNumber);

            // Show notification
            showNotification('Đã sao chép số tài khoản: ' + accountNumber);
        });
    });
}

function copyToClipboard(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
            console.log('Copied to clipboard:', text);
        }).catch(err => {
            console.error('Failed to copy:', err);
            fallbackCopyTextToClipboard(text);
        });
    } else {
        fallbackCopyTextToClipboard(text);
    }
}

function fallbackCopyTextToClipboard(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
        document.execCommand('copy');
        console.log('Fallback: Copied to clipboard');
    } catch (err) {
        console.error('Fallback: Could not copy text');
    }

    document.body.removeChild(textArea);
}

function showNotification(message) {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Create notification
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-check-circle"></i>
            <span>${message}</span>
        </div>
    `;

    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #28a745;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 9999;
        animation: slideInRight 0.3s ease;
    `;

    document.body.appendChild(notification);

    // Auto remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 3000);
}

// ===== ANIMATIONS =====
function initAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.couple-card, .timeline-item, .event-card, .gallery-item');
    animateElements.forEach(el => {
        observer.observe(el);
    });
}

// ===== CALENDAR FUNCTIONALITY =====
function addToCalendar(eventData) {
    const startDate = new Date(eventData.date);
    const endDate = new Date(startDate.getTime() + (2 * 60 * 60 * 1000)); // 2 hours later
    
    const formatDate = (date) => {
        return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    };
    
    const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventData.title)}&dates=${formatDate(startDate)}/${formatDate(endDate)}&details=${encodeURIComponent(eventData.description)}&location=${encodeURIComponent(eventData.location)}`;
    
    window.open(calendarUrl, '_blank');
}

// Add event listeners for calendar buttons
document.addEventListener('DOMContentLoaded', function() {
    const calendarButtons = document.querySelectorAll('.add-calendar');
    
    calendarButtons.forEach(button => {
        button.addEventListener('click', function() {
            const eventCard = this.closest('.event-card');
            const title = eventCard.querySelector('h4').textContent;
            const timeText = eventCard.querySelector('.event-time').textContent;
            const location = eventCard.querySelector('.event-location').textContent;
            
            // Extract date and time (you may need to adjust this based on your date format)
            const eventData = {
                title: title,
                date: '2025-07-01T15:30:00', // You should extract this from the actual event data
                description: `Đám cưới - ${title}`,
                location: location.replace('📍 ', '')
            };
            
            addToCalendar(eventData);
        });
    });
});

// ===== UTILITY FUNCTIONS =====
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Smooth scroll to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// ===== BACKGROUND MUSIC =====
function initBackgroundMusic() {
    const audio = document.getElementById('backgroundMusic');
    const musicToggle = document.getElementById('musicToggle');
    const musicIcon = musicToggle.querySelector('i');

    let isPlaying = false;
    let userInteracted = false;

    // Handle user interaction for autoplay policy
    function handleFirstInteraction() {
        if (!userInteracted) {
            userInteracted = true;
            // Try to play music after first user interaction
            setTimeout(() => {
                playMusic();
            }, 5000);
        }
    }

    // Add event listeners for first user interaction
    document.addEventListener('click', handleFirstInteraction, { once: true });
    document.addEventListener('keydown', handleFirstInteraction, { once: true });
    document.addEventListener('scroll', handleFirstInteraction, { once: true });

    function playMusic() {
        audio.play().then(() => {
            isPlaying = true;
            musicToggle.classList.add('playing');
            musicToggle.classList.remove('muted');
            musicIcon.className = 'fas fa-music';
            musicToggle.title = 'Tắt nhạc nền';
        }).catch(error => {
            console.log('Autoplay prevented:', error);
            isPlaying = false;
            musicToggle.classList.remove('playing');
            musicToggle.classList.add('muted');
            musicIcon.className = 'fas fa-volume-mute';
            musicToggle.title = 'Bật nhạc nền';
        });
    }

    function pauseMusic() {
        audio.pause();
        isPlaying = false;
        musicToggle.classList.remove('playing');
        musicToggle.classList.add('muted');
        musicIcon.className = 'fas fa-volume-mute';
        musicToggle.title = 'Bật nhạc nền';
    }

    // Music toggle button click handler
    musicToggle.addEventListener('click', function() {
        if (isPlaying) {
            pauseMusic();
        } else {
            playMusic();
        }
    });

    // Set initial volume
    audio.volume = 0.3;

    // Handle audio events
    audio.addEventListener('ended', function() {
        // Loop is handled by the loop attribute, but we can add custom logic here
        isPlaying = false;
        musicToggle.classList.remove('playing');
    });

    audio.addEventListener('play', function() {
        isPlaying = true;
        musicToggle.classList.add('playing');
        musicToggle.classList.remove('muted');
    });

    audio.addEventListener('pause', function() {
        isPlaying = false;
        musicToggle.classList.remove('playing');
        musicToggle.classList.add('muted');
    });
}

// ===== FLOATING HEARTS =====
function initFloatingHearts() {
    const heartsContainer = document.getElementById('floatingHearts');
    const heartSymbols = ['💕', '💖', '💗', '💝', '❣️', '💌', '❤️'];

    function createHeart() {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';

        // Random heart symbol
        heart.innerHTML = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];

        // Random animation variation
        const animations = ['floatDown', 'floatDownLeft', 'floatDownRight', 'floatDiagonal'];
        const randomAnimation = animations[Math.floor(Math.random() * animations.length)];

        // Set position and animation class based on animation type
        if (randomAnimation === 'floatDownLeft') {
            heart.classList.add('left');
            heart.style.left = (60 + Math.random() * 40) + '%'; // Start from right side
        } else if (randomAnimation === 'floatDownRight') {
            heart.classList.add('right');
            heart.style.left = (0 + Math.random() * 40) + '%'; // Start from left side
        } else if (randomAnimation === 'floatDiagonal') {
            heart.classList.add('diagonal');
            heart.style.left = (70 + Math.random() * 30) + '%'; // Start from top-right area
        } else {
            // floatDown - straight down
            heart.style.left = Math.random() * 100 + '%'; // Any horizontal position
        }

        // Random animation duration
        const duration = 6 + Math.random() * 4; // 6-10 seconds (faster than before)
        heart.style.animationDuration = duration + 's';

        // Random delay
        heart.style.animationDelay = Math.random() * 1 + 's';

        heartsContainer.appendChild(heart);

        // Remove heart after animation completes
        setTimeout(() => {
            if (heart.parentNode) {
                heart.remove();
            }
        }, (duration + 2) * 1000);
    }

    // Create hearts periodically
    function startHeartAnimation() {
        createHeart();

        // Random interval between 1.5-4 seconds (more frequent)
        const nextInterval = 1500 + Math.random() * 2500;
        setTimeout(startHeartAnimation, nextInterval);
    }

    // Start the heart animation after a short delay
    setTimeout(startHeartAnimation, 2000);

    // Create initial hearts
    for (let i = 0; i < 4; i++) {
        setTimeout(() => createHeart(), i * 800);
    }
}
