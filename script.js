document.addEventListener('DOMContentLoaded', function() {
    // Remove loading state immediately
    document.body.classList.add('loaded');
    
    // Update copyright year
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Create animated particles in the header background
    function createHeaderParticles() {
        const header = document.querySelector('header');
        const particleCount = window.innerWidth < 768 ? 10 : 20; // Drastically reduced
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'header-particle';
            
            // Random particle properties
            const size = 2 * (Math.random() * 8 + 2);
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;
            const opacity = Math.random() * 0.5 + 0.1;
            const duration = Math.random() * 15 + 8;
            const delay = Math.random() * 5;
            
            // Apply random styling
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${posX}%`;
            particle.style.top = `${posY}%`;
            particle.style.opacity = opacity;
            particle.style.animationDuration = `${duration}s`;
            particle.style.animationDelay = `${delay}s`;
            
            // Add occasional glow effect
            if (Math.random() > 0.7) {
                const hue = Math.floor(Math.random() * 360);
                particle.style.boxShadow = `0 0 ${Math.floor(size * 2)}px rgba(${hue}, 150, 255, 0.8)`;
                particle.style.backgroundColor = `hsla(${hue}, 100%, 75%, 0.6)`;
            }
            
            header.appendChild(particle);
        }
    }
    
    // Create additional dynamic bubbles
    function createDynamicBubbles() {
        const header = document.querySelector('header');
        const bubbleCount = window.innerWidth < 768 ? 4 : 8; // Drastically reduced
        
        // Bubble colors - pastel and bright
        const bubbleColors = [
            'rgba(253, 121, 168, 0.2)', // Pink - reduced opacity from 0.5 to 0.2
            'rgba(0, 206, 201, 0.2)',   // Teal - reduced opacity
            'rgba(162, 155, 254, 0.2)', // Purple - reduced opacity
            'rgba(255, 234, 167, 0.2)', // Yellow - reduced opacity
            'rgba(255, 118, 117, 0.2)', // Red - reduced opacity
            'rgba(116, 185, 255, 0.2)'  // Blue - reduced opacity
        ];
        
        for (let i = 0; i < bubbleCount; i++) {
            const bubble = document.createElement('div');
            bubble.className = 'bubble';
            
            // Random bubble properties
            const size = Math.random() * 30 + 10;
            const posX = Math.random() * 90 + 5;
            const posY = Math.random() * 80 + 10; // Position bubbles between 10% and 90% of header height
            const colorIndex = Math.floor(Math.random() * bubbleColors.length);
            const duration = Math.random() * 8 + 6;
            const delay = Math.random() * 2;
            
            // Apply random styling
            bubble.style.width = `${size}px`;
            bubble.style.height = `${size}px`;
            bubble.style.background = bubbleColors[colorIndex];
            bubble.style.left = `${posX}%`;
            bubble.style.bottom = `${posY}%`; // Position from bottom using percentage
            bubble.style.animationDuration = `${duration}s`;
            bubble.style.animationDelay = `${delay}s`;
            
            // Add reflection effect
            const reflection = document.createElement('div');
            reflection.style.position = 'absolute';
            reflection.style.top = '15%';
            reflection.style.left = '15%';
            reflection.style.width = '30%';
            reflection.style.height = '30%';
            reflection.style.backgroundColor = 'rgba(255, 255, 255, 0.4)'; // Reduced from 0.7 to 0.4
            reflection.style.borderRadius = '50%';
            
            // Randomly pop some bubbles - this happens automatically without click
            if (Math.random() > 0.5) {
                setTimeout(() => {
                    if (bubble.parentNode) { // Check if bubble still exists
                        popBubble(bubble);
                    }
                }, (duration * 1000 * 0.3) + (Math.random() * 600));
            }
            
            // Make some bubbles pop very quickly (within first second)
            if (i < bubbleCount * 0.1) { // Reduced from 20% to 10%
                setTimeout(() => {
                    if (bubble.parentNode) {
                        popBubble(bubble);
                    }
                }, Math.random() * 1000); // Random time between 0-1000ms
            }
            
            bubble.appendChild(reflection);
            header.appendChild(bubble);
        }
    }
    
    // Create dynamic floating elements
    function createFloatingElements() {
        const header = document.querySelector('header');
        const shapes = [
            { type: 'circle', size: '80px', opacity: 0.05 }, // Reduced opacity
            { type: 'circle', size: '40px', opacity: 0.04 }  // Kept only 2 shapes
        ];
        
        shapes.forEach((shape, index) => {
            const element = document.createElement('div');
            element.style.position = 'absolute';
            element.style.width = shape.size;
            element.style.height = shape.size;
            element.style.opacity = shape.opacity;
            element.style.background = 'rgba(255, 255, 255, 0.8)';
            element.style.zIndex = '0';
            element.style.pointerEvents = 'none';
            
            if (shape.type === 'circle') {
                element.style.borderRadius = '50%';
            } else if (shape.type === 'triangle') {
                element.style.width = '0';
                element.style.height = '0';
                element.style.borderLeft = `${parseInt(shape.size)/2}px solid transparent`;
                element.style.borderRight = `${parseInt(shape.size)/2}px solid transparent`;
                element.style.borderBottom = `${shape.size} solid rgba(255, 255, 255, 0.8)`;
                element.style.background = 'transparent';
            }
            
            // Random position
            element.style.top = `${Math.random() * 80 + 10}%`;
            element.style.left = `${Math.random() * 80 + 10}%`;
            
            // Animation
            element.style.animation = `bubbleFloat ${Math.random() * 10 + 8}s ease-in-out infinite`;
            element.style.animationDelay = `${Math.random() * 5}s`;
            
            header.appendChild(element);
        });
    }
    
    createHeaderParticles();
    // createDynamicBubbles();
    createFloatingElements();
    // setupFixedBubbles();
    
    // Periodically add a new bubble for continuous effect
    setInterval(() => {
        const header = document.querySelector('header');
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        
        const size = Math.random() * 25 + 10;
        const posX = Math.random() * 90 + 5;
        const posY = Math.random() * 80 + 10; // Position bubbles between 10% and 90% of header height
        const hue = Math.floor(Math.random() * 360);
        const duration = Math.random() * 8 + 6;
        
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.backgroundColor = `hsla(${hue}, 80%, 70%, 0.2)`; // Reduced opacity from 0.5 to 0.2
        bubble.style.left = `${posX}%`;
        bubble.style.bottom = `${posY}%`; // Position from bottom using percentage
        bubble.style.animationDuration = `${duration}s`;
        
        header.appendChild(bubble);
        
        // Simply remove bubbles after animation completes - no popping effect
        setTimeout(() => {
            if (bubble.parentNode) {
                bubble.style.transition = 'opacity 0.5s ease-out';
                bubble.style.opacity = '0';
                
                // Remove from DOM after fade out
                setTimeout(() => {
                    if (bubble.parentNode) {
                        bubble.remove();
                    }
                }, 500);
            }
        }, duration * 1000 * 0.8); // Let bubble complete 80% of animation before fading out
    }, 3000); // Drastically reduced frequency (from 800ms to 3000ms)
    
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Horizontal scrolling functionality for audio containers
    const setupHorizontalScroll = () => {
        // Setup scroll buttons
        document.querySelectorAll('.scroll-btn').forEach(button => {
            button.addEventListener('click', function() {
                const container = this.closest('.comparison-group').querySelector('.audio-container');
                const scrollAmount = 300; // px to scroll
                
                if (this.classList.contains('scroll-left')) {
                    container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
                } else {
                    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
                }
            });
        });
        
        // Add scroll event listener to show/hide buttons based on scroll position
        document.querySelectorAll('.audio-container').forEach(container => {
            const updateScrollButtons = () => {
                const leftBtn = container.closest('.comparison-group').querySelector('.scroll-left');
                const rightBtn = container.closest('.comparison-group').querySelector('.scroll-right');
                
                // Show/hide left button based on scroll position
                if (container.scrollLeft <= 10) {
                    leftBtn.style.opacity = '0.5';
                } else {
                    leftBtn.style.opacity = '1';
                }
                
                // Show/hide right button based on scroll position
                if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
                    rightBtn.style.opacity = '0.5';
                } else {
                    rightBtn.style.opacity = '1';
                }
            };
            
            // Initial button state
            updateScrollButtons();
            
            // Update button state on scroll
            container.addEventListener('scroll', updateScrollButtons);
            
            // Update button state on window resize
            window.addEventListener('resize', updateScrollButtons);
        });
    };
    
    setupHorizontalScroll();
    
    // Highlight active navigation link on scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    function highlightNavLink() {
        const scrollPosition = window.scrollY;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionBottom = sectionTop + section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavLink);
    highlightNavLink(); // Call on page load
    
    // Back to Top button functionality
    const backToTopButton = document.getElementById('back-to-top');
    
    function toggleBackToTopButton() {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    }
    
    window.addEventListener('scroll', toggleBackToTopButton);
    toggleBackToTopButton(); // Call on page load
    
    backToTopButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Add interactive hover effect to audio items
    const audioItems = document.querySelectorAll('.audio-item');
    
    audioItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.1)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
    });
    
    // Animated numbers for results table
    function animateValue(obj, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const value = progress * (end - start) + start;
            obj.innerHTML = value.toFixed(1);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }
    
    // Intersection Observer for triggering animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.id === 'results') {
                    // Animate numbers in table cells for both table types
                    const resultsTableCells = entry.target.querySelectorAll('.results-table td:not(:first-child)');
                    resultsTableCells.forEach(cell => {
                        const value = parseFloat(cell.textContent);
                        if (!isNaN(value)) {
                            animateValue(cell, 0, value, 1500);
                        }
                    });
                    
                    // Animate numbers in the TTS performance table cells
                    const ttsTableCells = entry.target.querySelectorAll('.tts-performance-table td:not(:first-child)');
                    ttsTableCells.forEach(cell => {
                        const text = cell.textContent.trim();
                        
                        // Skip cells with non-numeric or special content
                        if (text === '-' || text.includes('/') || text.includes('~') || text.includes('M') || 
                            text.includes('B') || text.includes(',')) {
                            return;
                        }
                        
                        // Extract numeric value (handles values with GPU notes)
                        const matches = text.match(/^(\d+\.\d+|\d+)/);
                        if (matches && matches[1]) {
                            const value = parseFloat(matches[1]);
                            if (!isNaN(value)) {
                                // Store original content to restore GPU notes
                                const originalContent = cell.innerHTML;
                                const gpuNote = originalContent.includes('<span') ? 
                                    originalContent.substring(originalContent.indexOf('<span')) : '';
                                
                                // Create a new span for the animated value
                                const valueSpan = document.createElement('span');
                                cell.innerHTML = '';
                                cell.appendChild(valueSpan);
                                
                                // Add GPU note back if it existed
                                if (gpuNote) {
                                    cell.innerHTML += ' ' + gpuNote;
                                }
                                
                                // Animate the value
                                animateValue(valueSpan, 0, value, 1500);
                            }
                        }
                    });
                    
                    // Add animation for model comparison table
                    const comparisonTable = entry.target.querySelector('.model-comparison-table');
                    if (comparisonTable) {
                        // Delay the appearance of each row
                        const rows = comparisonTable.querySelectorAll('tbody tr');
                        rows.forEach((row, index) => {
                            row.style.animation = `fadeInUp 0.5s ease-out`;
                            row.style.animationDelay = `${index * 100}ms`;
                        });
                        
                        // Add special highlight animation to SupertonicTTS row
                        const supertonicRow = comparisonTable.querySelector('tr.highlight-row');
                        if (supertonicRow) {
                            setTimeout(() => {
                                supertonicRow.style.transition = 'background-color 1s ease';
                                supertonicRow.style.backgroundColor = 'rgba(162, 155, 254, 0.1)';
                                
                                // Reset background after animation
                                setTimeout(() => {
                                    supertonicRow.style.backgroundColor = '';
                                }, 1500);
                            }, rows.length * 100 + 800);
                        }
                    }
                }
                
                // Add a class for custom animations
                entry.target.classList.add('animated');
                
                // Unobserve after animation is triggered
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    
    // Observe all sections for animations
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
    
    // Image error handling for placeholder images
    document.querySelectorAll('.placeholder-image').forEach(img => {
        img.addEventListener('error', function() {
            this.src = 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
                <svg width="800" height="400" xmlns="http://www.w3.org/2000/svg">
                    <rect width="100%" height="100%" fill="#f8f9fa"/>
                    <text x="50%" y="50%" font-family="Arial" font-size="20" fill="#6c757d" text-anchor="middle">
                        Image Placeholder
                    </text>
                </svg>
            `);
            this.alt = 'Placeholder Image';
        });
    });
    
    // Audio player enhancements
    document.querySelectorAll('audio').forEach(audioElement => {
        // Style the audio player when playing
        audioElement.addEventListener('play', function() {
            // First remove playing class from all audio items
            document.querySelectorAll('.audio-item').forEach(item => {
                item.classList.remove('playing');
            });
            
            // Add playing class to the current item
            const audioItem = this.closest('.audio-item');
            if (audioItem) {
                audioItem.classList.add('playing');
                
                // Smoothly scroll the playing item into view if needed
                if (audioItem.scrollIntoViewIfNeeded) {
                    audioItem.scrollIntoViewIfNeeded({ behavior: 'smooth', block: 'nearest' });
                } else {
                    const container = audioItem.closest('.audio-container');
                    const itemLeft = audioItem.offsetLeft;
                    const containerLeft = container.scrollLeft;
                    const containerWidth = container.clientWidth;
                    
                    // If the item is not fully visible, scroll to it
                    if (itemLeft < containerLeft || itemLeft + audioItem.offsetWidth > containerLeft + containerWidth) {
                        container.scrollTo({
                            left: itemLeft - (containerWidth / 2) + (audioItem.offsetWidth / 2),
                            behavior: 'smooth'
                        });
                    }
                }
            }
        });
        
        audioElement.addEventListener('pause', function() {
            const audioItem = this.closest('.audio-item');
            if (audioItem) {
                audioItem.classList.remove('playing');
            }
        });
        
        audioElement.addEventListener('ended', function() {
            const audioItem = this.closest('.audio-item');
            if (audioItem) {
                audioItem.classList.remove('playing');
            }
        });
        
        audioElement.addEventListener('error', function() {
            const audioItem = this.closest('.audio-item');
            if (audioItem) {
                const errorMsg = document.createElement('p');
                errorMsg.className = 'audio-error';
                errorMsg.textContent = 'Audio file not available. Please upload your sample.';
                
                this.style.display = 'none';
                audioItem.appendChild(errorMsg);
            }
        });
    });
    
    // Function to create an active audio comparison section 
    function setupAudioComparison() {
        const audioPlayers = document.querySelectorAll('audio');
        
        audioPlayers.forEach(player => {
            player.addEventListener('play', function() {
                // Pause all other players when one starts playing
                audioPlayers.forEach(otherPlayer => {
                    if (otherPlayer !== player && !otherPlayer.paused) {
                        otherPlayer.pause();
                    }
                });
            });
        });
    }
    
    setupAudioComparison();
    
    // Pop bubble function to reuse
    function popBubble(bubble) {
        if (bubble.classList.contains('popping')) {
            return; // Already popping
        }
        
        bubble.classList.add('popping');
        
        // Create tiny particle effects
        const particleCount = Math.floor(Math.random() * 2) + 2; // Reduced from 4+3 to 2+2
        const bubbleRect = bubble.getBoundingClientRect();
        const centerX = bubbleRect.left + bubbleRect.width / 2;
        const centerY = bubbleRect.top + bubbleRect.height / 2;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.style.position = 'absolute';
            particle.style.width = `${Math.random() * 6 + 2}px`;
            particle.style.height = particle.style.width;
            particle.style.backgroundColor = window.getComputedStyle(bubble).background;
            particle.style.borderRadius = '50%';
            particle.style.zIndex = '10';
            particle.style.left = `${centerX}px`;
            particle.style.top = `${centerY}px`;
            particle.style.opacity = '0.7';
            particle.style.transform = 'translate(-50%, -50%)';
            particle.style.transition = 'all 0.5s ease-out';
            
            document.body.appendChild(particle);
            
            // Animate particles in different directions
            setTimeout(() => {
                const angle = Math.random() * Math.PI * 2;
                const distance = Math.random() * 50 + 20;
                particle.style.left = `${centerX + Math.cos(angle) * distance}px`;
                particle.style.top = `${centerY + Math.sin(angle) * distance}px`;
                particle.style.opacity = '0';
                particle.style.width = '0';
                particle.style.height = '0';
                
                // Remove particle after animation
                setTimeout(() => {
                    particle.remove();
                }, 500);
            }, 10);
        }
        
        // Remove the bubble after animation (if it's not a fixed bubble)
        if (!bubble.classList.contains('bubble-fixed-1') && 
            !bubble.classList.contains('bubble-fixed-2') && 
            !bubble.classList.contains('bubble-fixed-3')) {
            setTimeout(() => {
                if (bubble.parentNode) {
                    bubble.remove();
                }
            }, 500);
        }
    }
    
    // Make fixed bubbles animate only (no clicking)
    function setupFixedBubbles() {
        // Just use one fixed bubble instead of three
        const bubble = document.querySelector('.bubble-fixed-1');
        if (bubble) {
            setInterval(() => {
                if (!bubble.classList.contains('popping')) {
                    popBubble(bubble);
                    
                    // Fixed bubbles reappear after popping
                    setTimeout(() => {
                        bubble.classList.remove('popping');
                        bubble.style.opacity = '0';
                        
                        // Fade back in
                        setTimeout(() => {
                            bubble.style.transition = 'opacity 1s ease';
                            bubble.style.opacity = '0.6'; // Reduced opacity
                        }, 100);
                    }, 500);
                }
            }, 15000); // Very infrequent popping (15 seconds)
        }
        
        // Remove the other fixed bubbles' animations
        document.querySelectorAll('.bubble-fixed-2, .bubble-fixed-3').forEach(bubble => {
            bubble.style.display = 'none'; // Hide the other fixed bubbles
        });
    }

    // Tab switching functionality
    const tabs = document.querySelectorAll('.comparison-tab');
    const contents = document.querySelectorAll('.comparison-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Pause all playing audio before switching
            pauseAllPlayingAudio();
            
            // Remove active class from all tabs and contents
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));

            // Add active class to clicked tab and corresponding content
            tab.classList.add('active');
            const contentId = tab.getAttribute('data-tab');
            document.getElementById(contentId).classList.add('active');

            // Update scroll buttons visibility for the new content
            const newContent = document.getElementById(contentId);
            const scrollButtons = newContent.querySelectorAll('.scroll-controls');
            scrollButtons.forEach(buttons => {
                const container = buttons.nextElementSibling;
                updateScrollButtons(container);
            });
        });
    });

    // Sample tab switching functionality
    document.querySelectorAll('.sample-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            // Pause all playing audio before switching
            pauseAllPlayingAudio();
            
            // Remove active class from all tabs and contents
            const parentContainer = tab.closest('.comparison-content');
            if (parentContainer) {
                parentContainer.querySelectorAll('.sample-tab').forEach(t => t.classList.remove('active'));
                parentContainer.querySelectorAll('.sample-content').forEach(c => c.classList.remove('active'));
                
                // Add active class to clicked tab and corresponding content
                tab.classList.add('active');
                const content = parentContainer.querySelector(`.sample-content[data-sample="${tab.getAttribute('data-sample')}"]`);
                if (content) {
                    content.classList.add('active');
                    // Update scroll buttons visibility for the new content
                    const audioContainer = content.querySelector('.audio-container');
                    if (audioContainer) {
                        // Trigger the scroll event to update button visibility
                        audioContainer.dispatchEvent(new Event('scroll'));
                    }
                }
            }
        });
    });

    // Step Sample Tab Switching
    const stepSampleTabs = document.querySelectorAll('.step-sample-tab');
    const stepSampleContents = document.querySelectorAll('.sample-content[step-data-sample]');

    stepSampleTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Pause all playing audio before switching
            pauseAllPlayingAudio();
            
            // Remove active class from all tabs and contents
            stepSampleTabs.forEach(t => t.classList.remove('active'));
            stepSampleContents.forEach(c => c.classList.remove('active'));

            // Add active class to clicked tab and corresponding content
            this.classList.add('active');
            const sampleNumber = this.getAttribute('step-data-sample');
            const content = document.querySelector(`.sample-content[step-data-sample="${sampleNumber}"]`);
            if (content) {
                content.classList.add('active');
                
                // Update scroll buttons visibility
                const container = content.querySelector('.audio-container');
                if (container) {
                    updateScrollButtons(container);
                }
            }
        });
    });

    // Function to pause all playing audio
    function pauseAllPlayingAudio() {
        const allAudio = document.querySelectorAll('audio');
        allAudio.forEach(audio => {
            if (!audio.paused) {
                audio.pause();
                // Remove playing class from parent audio-item
                const audioItem = audio.closest('.audio-item');
                if (audioItem) {
                    audioItem.classList.remove('playing');
                }
            }
        });
    }

    // Modal Dialog Functionality
    const modal = document.getElementById('arxiv-modal');
    const closeModal = document.querySelector('.close-modal');

    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Audio play tracking
    document.querySelectorAll('audio').forEach(audioElement => {
        audioElement.addEventListener('play', function() {
            const audioItem = this.closest('.audio-item');
            if (audioItem) {
                const modelName = audioItem.closest('section').id;
                const audioType = audioItem.querySelector('h4').textContent.trim();
                
                // Track audio play event
                gtag('event', 'audio_play', {
                    'event_category': 'audio_interaction',
                    'event_label': `${modelName}_${audioType}`
                });
            }
        });
    });

    // Tab switching tracking
    document.querySelectorAll('.sample-tab, .step-sample-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            const section = this.closest('section').id;
            const tabName = this.textContent.trim();
            
            // Track tab switch event
            gtag('event', 'tab_switch', {
                'event_category': 'navigation',
                'event_label': `${section}_${tabName}`
            });
        });
    });

    // Author link click tracking
    document.querySelectorAll('.author-name a').forEach(link => {
        link.addEventListener('click', function() {
            const authorName = this.textContent.trim();
            gtag('event', 'author_link_click', {
                'event_category': 'engagement',
                'event_label': authorName
            });
        });
    });

    // Scroll depth tracking
    let maxScroll = 0;
    window.addEventListener('scroll', function() {
        const scrollPercent = Math.round((window.scrollY + window.innerHeight) / document.documentElement.scrollHeight * 100);
        if (scrollPercent > maxScroll) {
            maxScroll = scrollPercent;
            if (maxScroll % 25 === 0) { // Track at 25%, 50%, 75%, 100%
                gtag('event', 'scroll_depth', {
                    'event_category': 'engagement',
                    'event_label': `${maxScroll}%`
                });
            }
        }
    });

    // Time spent tracking
    let startTime = new Date().getTime();
    window.addEventListener('beforeunload', function() {
        const timeSpent = Math.round((new Date().getTime() - startTime) / 1000);
        gtag('event', 'time_spent', {
            'event_category': 'engagement',
            'event_label': `${timeSpent} seconds`
        });
    });

    // Model comparison table interaction tracking
    document.querySelectorAll('.model-comparison-table tbody tr').forEach(row => {
        row.addEventListener('mouseenter', function() {
            const modelName = this.querySelector('td:first-child').textContent.trim();
            gtag('event', 'model_hover', {
                'event_category': 'interaction',
                'event_label': modelName
            });
        });
    });

    // Section visibility tracking
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                gtag('event', 'section_view', {
                    'event_category': 'visibility',
                    'event_label': entry.target.id
                });
                sectionObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('section[id]').forEach(section => {
        sectionObserver.observe(section);
    });
});

// Fallback for Safari
if (document.readyState === 'complete') {
    document.body.classList.add('loaded');
} 