/**
 * Personal Portfolio - Nagalambika D Koralli
 * Main JavaScript Controller
 */

document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    // -------------------------------------------------------------------------
    // 1. SELECTORS & STATE
    // -------------------------------------------------------------------------
    const header = document.getElementById('header');
    const navToggle = document.getElementById('navToggle');
    const primaryNav = document.getElementById('primaryNav');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id], footer[id]');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    const copyEmailBtn = document.getElementById('copyEmailBtn');
    const contactForm = document.getElementById('contactForm');
    const backToTopBtn = document.getElementById('backToTop');
    const toast = document.getElementById('toastNotification');
    const toastMessage = document.getElementById('toastMessage');

    // -------------------------------------------------------------------------
    // 2. TOAST NOTIFICATION HELPER
    // -------------------------------------------------------------------------
    let toastTimeout;
    const showToast = (message, duration = 3000) => {
        if (!toast || !toastMessage) return;
        
        clearTimeout(toastTimeout);
        toastMessage.textContent = message;
        toast.classList.add('active');

        toastTimeout = setTimeout(() => {
            toast.classList.remove('active');
        }, duration);
    };

    // -------------------------------------------------------------------------
    // 3. MOBILE NAVIGATION DRAWER
    // -------------------------------------------------------------------------
    if (navToggle && primaryNav) {
        const toggleMenu = () => {
            const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', !isExpanded);
            primaryNav.classList.toggle('active');
        };

        const closeMenu = () => {
            navToggle.setAttribute('aria-expanded', 'false');
            primaryNav.classList.remove('active');
        };

        navToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleMenu();
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (primaryNav.classList.contains('active') && !primaryNav.contains(e.target) && !navToggle.contains(e.target)) {
                closeMenu();
            }
        });

        // Close menu on clicking nav link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                closeMenu();
            });
        });
    }

    // -------------------------------------------------------------------------
    // 4. NAVBAR SCROLL EFFECT & ACTIVE LINK HIGHLIGHTING (SCROLL-SPY)
    // -------------------------------------------------------------------------
    const handleScroll = () => {
        const scrollY = window.pageYOffset || document.documentElement.scrollTop;

        // Sticky Navbar shadow toggle
        if (header) {
            if (scrollY > 30) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }

        // Back to top button visibility
        if (backToTopBtn) {
            if (scrollY > 400) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        }

        // Scroll spy
        const navHeight = header ? header.offsetHeight : 80;
        let currentSectionId = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - navHeight - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                currentSectionId = sectionId;
            }
        });

        if (currentSectionId) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${currentSectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    // -------------------------------------------------------------------------
    // 5. SMOOTH SCROLLING FOR INTERNAL ANCHORS
    // -------------------------------------------------------------------------
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                const navHeight = header ? header.offsetHeight : 76;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - navHeight + 2;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Back to top button action
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // -------------------------------------------------------------------------
    // 6. INTERACTIVE PROJECT FILTERING
    // -------------------------------------------------------------------------
    if (filterButtons.length > 0 && projectCards.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                const filterValue = button.getAttribute('data-filter');

                projectCards.forEach(card => {
                    const cardCategory = card.getAttribute('data-category');

                    if (filterValue === 'all' || cardCategory === filterValue) {
                        card.classList.remove('hidden');
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, 50);
                    } else {
                        card.classList.add('hidden');
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(10px)';
                    }
                });
            });
        });
    }

    // -------------------------------------------------------------------------
    // 7. COPY EMAIL TO CLIPBOARD
    // -------------------------------------------------------------------------
    if (copyEmailBtn) {
        copyEmailBtn.addEventListener('click', async () => {
            const emailAddress = 'dharmarayank946@gmail.com';
            try {
                if (navigator.clipboard && window.isSecureContext) {
                    await navigator.clipboard.writeText(emailAddress);
                } else {
                    // Fallback for non-https / older browsers
                    const tempInput = document.createElement('input');
                    tempInput.value = emailAddress;
                    document.body.appendChild(tempInput);
                    tempInput.select();
                    document.execCommand('copy');
                    document.body.removeChild(tempInput);
                }
                showToast('Email address copied to clipboard!');
            } catch (err) {
                showToast('Email: dharmarayank946@gmail.com');
            }
        });
    }

    // -------------------------------------------------------------------------
    // 8. INTERACTIVE CONTACT FORM VALIDATION & HANDLING
    // -------------------------------------------------------------------------
    if (contactForm) {
        const nameInput = document.getElementById('senderName');
        const emailInput = document.getElementById('senderEmail');
        const subjectInput = document.getElementById('messageSubject');
        const messageInput = document.getElementById('messageBody');
        const submitBtn = document.getElementById('submitBtn');

        const nameError = document.getElementById('nameError');
        const emailError = document.getElementById('emailError');
        const subjectError = document.getElementById('subjectError');
        const messageError = document.getElementById('messageError');

        const validateEmail = (email) => {
            return String(email)
                .toLowerCase()
                .match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
        };

        const clearErrors = () => {
            [nameInput, emailInput, subjectInput, messageInput].forEach(input => {
                if (input) input.classList.remove('input-error');
            });
            [nameError, emailError, subjectError, messageError].forEach(error => {
                if (error) error.classList.remove('active');
            });
        };

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            clearErrors();

            let isValid = true;

            // Validate Name
            if (!nameInput.value.trim()) {
                nameInput.classList.add('input-error');
                nameError.classList.add('active');
                isValid = false;
            }

            // Validate Email
            if (!emailInput.value.trim() || !validateEmail(emailInput.value.trim())) {
                emailInput.classList.add('input-error');
                emailError.classList.add('active');
                isValid = false;
            }

            // Validate Subject
            if (!subjectInput.value.trim()) {
                subjectInput.classList.add('input-error');
                subjectError.classList.add('active');
                isValid = false;
            }

            // Validate Message
            if (!messageInput.value.trim()) {
                messageInput.classList.add('input-error');
                messageError.classList.add('active');
                isValid = false;
            }

            if (isValid) {
                // Disable button momentarily to indicate progress
                if (submitBtn) {
                    submitBtn.disabled = true;
                    submitBtn.innerHTML = `
                        <span>Preparing Email...</span>
                        <svg class="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="12" y1="2" x2="12" y2="6"></line>
                            <line x1="12" y1="18" x2="12" y2="22"></line>
                            <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
                            <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
                            <line x1="2" y1="12" x2="6" y2="12"></line>
                            <line x1="18" y1="12" x2="22" y2="12"></line>
                            <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
                            <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
                        </svg>
                    `;
                }

                // Construct mailto link
                const recipient = 'dharmarayank946@gmail.com';
                const subject = encodeURIComponent(`[Portfolio Contact] ${subjectInput.value.trim()}`);
                const body = encodeURIComponent(
                    `Hello Nagalambika,\n\nName: ${nameInput.value.trim()}\nEmail: ${emailInput.value.trim()}\n\nMessage:\n${messageInput.value.trim()}`
                );
                const mailtoUrl = `mailto:${recipient}?subject=${subject}&body=${body}`;

                setTimeout(() => {
                    // Open default mail client
                    window.location.href = mailtoUrl;

                    showToast('Opening your email client to send message!');
                    contactForm.reset();

                    if (submitBtn) {
                        submitBtn.disabled = false;
                        submitBtn.innerHTML = `
                            <span class="btn-text">Send Message</span>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <line x1="22" y1="2" x2="11" y2="13"></line>
                                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                            </svg>
                        `;
                    }
                }, 600);
            }
        });

        // Real-time error removal on input
        [nameInput, emailInput, subjectInput, messageInput].forEach(input => {
            if (input) {
                input.addEventListener('input', () => {
                    input.classList.remove('input-error');
                    const errorSpan = input.parentElement.querySelector('.form-error');
                    if (errorSpan) errorSpan.classList.remove('active');
                });
            }
        });
    }

    // -------------------------------------------------------------------------
    // 9. INTERSECTION OBSERVER SCROLL REVEAL ANIMATIONS
    // -------------------------------------------------------------------------
    const revealElements = document.querySelectorAll('.reveal-on-scroll');

    if ('IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -40px 0px'
        });

        revealElements.forEach(element => {
            revealObserver.observe(element);
        });
    } else {
        // Fallback for older browsers
        revealElements.forEach(element => {
            element.classList.add('revealed');
        });
    }
});

