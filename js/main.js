// DOM Elements
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    // Toggle Nav
    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger Animation
        burger.classList.toggle('toggle');
    });
};

// FAQ Accordion - 简化版本，确保兼容性
const faqAccordion = () => {
    const bindFAQEvents = () => {
        const faqQuestions = document.querySelectorAll('.faq-question');
        
        faqQuestions.forEach(question => {
            // 移除已有的事件监听器，防止重复绑定
            question.onclick = null;
            
            // 添加点击事件
            question.onclick = function() {
                const faqItem = this.closest('.faq-item');
                if (!faqItem) return;
                
                const isActive = faqItem.classList.contains('active');
                
                // 关闭所有其他FAQ项
                document.querySelectorAll('.faq-item').forEach(item => {
                    item.classList.remove('active');
                });
                
                // 切换当前FAQ项
                if (!isActive) {
                    faqItem.classList.add('active');
                }
            };
        });
    };
    
    // 立即执行
    bindFAQEvents();
    
    // 延迟执行，确保所有元素都已加载
    setTimeout(bindFAQEvents, 500);
    setTimeout(bindFAQEvents, 2000);
};

// Preloader
const preloader = () => {
    // 隐藏预加载器 - DOM加载完成后立即隐藏，不等待所有资源
    const hidePreloader = () => {
        const preloader = document.querySelector('.preloader');
        if (preloader) {
            preloader.classList.add('hidden');
        }
    };
    
    // DOM加载完成后隐藏
    document.addEventListener('DOMContentLoaded', hidePreloader);
    
    // 万一上面没触发，window load也作为备份
    window.addEventListener('load', hidePreloader);
    
    // 最多3秒后强制隐藏，防止一直转圈
    setTimeout(hidePreloader, 3000);
};

// Scroll to Top Button
const scrollTopButton = () => {
    const scrollTopBtn = document.querySelector('.scroll-top');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('active');
        } else {
            scrollTopBtn.classList.remove('active');
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
};

// Fade-in Animation on Scroll
const fadeInOnScroll = () => {
    const fadeElements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    fadeElements.forEach(element => {
        element.style.opacity = 0;
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
};

// Smooth Scrolling for Anchor Links
const smoothScrolling = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
};

// Add CSS for burger toggle animation
const style = document.createElement('style');
style.textContent = `
    .burger.toggle .line1 {
        transform: rotate(-45deg) translate(-5px, 6px);
    }
    
    .burger.toggle .line2 {
        opacity: 0;
    }
    
    .burger.toggle .line3 {
        transform: rotate(45deg) translate(-5px, -6px);
    }
    
    @keyframes navLinkFade {
        from {
            opacity: 0;
            transform: translateX(50px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
`;
document.head.appendChild(style);

// Render random results on index page
const renderRandomResults = () => {
    const resultsGrid = document.getElementById('resultsGrid');
    if (!resultsGrid) return;
    
    const allCasesData = [
        { type: 'man-fa', image: 'images/man-fa-001.jpg', label: 'MEN HAIRLINE', title: 'Men’s Hairline Restoration' },
        { type: 'man-fa', image: 'images/man-fa-002.jpg', label: 'MEN HAIRLINE', title: 'Men’s Hairline Restoration' },
        { type: 'man-fa', image: 'images/man-fa-003.jpg', label: 'MEN HAIRLINE', title: 'Men’s Hairline Restoration' },
        { type: 'man-fa', image: 'images/man-fa-004.jpg', label: 'MEN HAIRLINE', title: 'Men’s Hairline Restoration' },
        { type: 'man-fa', image: 'images/man-fa-005.jpg', label: 'MEN HAIRLINE', title: 'Men’s Hairline Restoration' },
        { type: 'man-tu', image: 'images/man-tu-001.jpg', label: 'MEN CROWN', title: 'Men’s Baldness Hair Transplant' },
        { type: 'man-tu', image: 'images/man-tu-002.jpg', label: 'MEN CROWN', title: 'Men’s Baldness Hair Transplant' },
        { type: 'man-tu', image: 'images/man-tu-003.jpg', label: 'MEN CROWN', title: 'Men’s Baldness Hair Transplant' },
        { type: 'man-tu', image: 'images/man-tu-004.jpg', label: 'MEN CROWN', title: 'Men’s Baldness Hair Transplant' },
        { type: 'man-tu', image: 'images/man-tu-005.jpg', label: 'MEN CROWN', title: 'Men’s Baldness Hair Transplant' },
        { type: 'nv-fa', image: 'images/nv-fa-001.jpg', label: 'WOMEN HAIRLINE', title: 'Women’s Hairline Transplant' },
        { type: 'nv-fa', image: 'images/nv-fa-002.jpg', label: 'WOMEN HAIRLINE', title: 'Women’s Hairline Transplant' },
        { type: 'nv-fa', image: 'images/nv-fa-003.jpg', label: 'WOMEN HAIRLINE', title: 'Women’s Hairline Transplant' },
        { type: 'nv-fa', image: 'images/nv-fa-004.jpg', label: 'WOMEN HAIRLINE', title: 'Women’s Hairline Transplant' },
        { type: 'nv-fa', image: 'images/nv-fa-005.jpg', label: 'WOMEN HAIRLINE', title: 'Women’s Hairline Transplant' },
        { type: 'man-hu', image: 'images/man-hu-001.jpg', label: 'BEARD', title: 'Beard Transplant' },
        { type: 'man-hu', image: 'images/man-hu-002.jpg', label: 'BEARD', title: 'Beard Transplant' },
        { type: 'man-hu', image: 'images/man-hu-003.jpg', label: 'BEARD', title: 'Beard Transplant' },
        { type: 'nv-mei', image: 'images/nv-mei-001.jpg', label: 'EYEBROW', title: 'Eyebrow Transplant' },
        { type: 'nv-mei', image: 'images/nv-mei-002.jpg', label: 'EYEBROW', title: 'Eyebrow Transplant' }
    ];
    
    function shuffleArray(array) {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    }
    
    const shuffled = shuffleArray(allCasesData);
    const selectedCases = shuffled.slice(0, 6);
    
    resultsGrid.innerHTML = selectedCases.map((caseItem, index) => `
        <div class="result-card fade-in" data-type="${caseItem.type}">
            <div class="result-image-wrapper">
                <span class="result-badge">${caseItem.label}</span>
                <img src="${caseItem.image}" alt="${caseItem.title}" loading="lazy">
            </div>
            <div class="result-info">
                <h3>${caseItem.title}</h3>
            </div>
        </div>
    `).join('');
};

// Cases filter and rendering
const initCasesFilter = () => {
    const cases = [
        { id: 1, image: 'images/man-fa-001.jpg', title: 'Men’s Hairline Restoration', category: 'man-fa', label: 'MEN HAIRLINE' },
        { id: 2, image: 'images/man-fa-002.jpg', title: 'Men’s Hairline Restoration', category: 'man-fa', label: 'MEN HAIRLINE' },
        { id: 3, image: 'images/man-fa-003.jpg', title: 'Men’s Hairline Restoration', category: 'man-fa', label: 'MEN HAIRLINE' },
        { id: 4, image: 'images/man-fa-004.jpg', title: 'Men’s Hairline Restoration', category: 'man-fa', label: 'MEN HAIRLINE' },
        { id: 5, image: 'images/man-fa-005.jpg', title: 'Men’s Hairline Restoration', category: 'man-fa', label: 'MEN HAIRLINE' },
        { id: 6, image: 'images/man-tu-001.jpg', title: 'Men’s Baldness Hair Transplant', category: 'man-tu', label: 'MEN CROWN' },
        { id: 7, image: 'images/man-tu-002.jpg', title: 'Men’s Baldness Hair Transplant', category: 'man-tu', label: 'MEN CROWN' },
        { id: 8, image: 'images/man-tu-003.jpg', title: 'Men’s Baldness Hair Transplant', category: 'man-tu', label: 'MEN CROWN' },
        { id: 9, image: 'images/man-tu-004.jpg', title: 'Men’s Baldness Hair Transplant', category: 'man-tu', label: 'MEN CROWN' },
        { id: 10, image: 'images/man-tu-005.jpg', title: 'Men’s Baldness Hair Transplant', category: 'man-tu', label: 'MEN CROWN' },
        { id: 11, image: 'images/nv-fa-001.jpg', title: 'Women’s Hairline Transplant', category: 'nv-fa', label: 'WOMEN HAIRLINE' },
        { id: 12, image: 'images/nv-fa-002.jpg', title: 'Women’s Hairline Transplant', category: 'nv-fa', label: 'WOMEN HAIRLINE' },
        { id: 13, image: 'images/nv-fa-003.jpg', title: 'Women’s Hairline Transplant', category: 'nv-fa', label: 'WOMEN HAIRLINE' },
        { id: 14, image: 'images/nv-fa-004.jpg', title: 'Women’s Hairline Transplant', category: 'nv-fa', label: 'WOMEN HAIRLINE' },
        { id: 15, image: 'images/nv-fa-005.jpg', title: 'Women’s Hairline Transplant', category: 'nv-fa', label: 'WOMEN HAIRLINE' },
        { id: 16, image: 'images/man-hu-001.jpg', title: 'Beard Transplant', category: 'man-hu', label: 'BEARD' },
        { id: 17, image: 'images/man-hu-002.jpg', title: 'Beard Transplant', category: 'man-hu', label: 'BEARD' },
        { id: 18, image: 'images/man-hu-003.jpg', title: 'Beard Transplant', category: 'man-hu', label: 'BEARD' },
        { id: 19, image: 'images/nv-mei-001.jpg', title: 'Eyebrow Transplant', category: 'nv-mei', label: 'EYEBROW' },
        { id: 20, image: 'images/nv-mei-002.jpg', title: 'Eyebrow Transplant', category: 'nv-mei', label: 'EYEBROW' }
    ];
    
    const casesGrid = document.getElementById('casesGrid');
    const filterTabs = document.querySelectorAll('.filter-tab');
    
    if (!casesGrid) return;
    
    // Render all cases
    const renderCases = (filter = 'all') => {
        const filteredCases = filter === 'all' 
            ? cases 
            : cases.filter(c => c.category === filter);
        
        casesGrid.innerHTML = filteredCases.map(c => `
            <div class="case-card" data-category="${c.category}">
                <div class="case-image-wrapper">
                    <img src="${c.image}" alt="${c.title}" loading="lazy">
                    <span class="case-badge">${c.label}</span>
                </div>
                <div class="case-info">
                    <h3>${c.title}</h3>
                </div>
            </div>
        `).join('');
    };
    
    // Filter click handlers
    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            filterTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderCases(tab.dataset.filter);
        });
    });
    
    // Initial render
    renderCases();
};

// Render doctor-patient photos
const renderDoctorPatientPhotos = () => {
    const doctorPatientGrid = document.getElementById('doctorPatientGrid');
    if (!doctorPatientGrid) return;
    
    const maxImageNumber = 76;
    const imageCount = 6;
    
    // 通用的场景名称列表
    const photoNames = [
        'Patient Success Story',
        'Happy Patient Moment',
        'Doctor & Patient',
        'Treatment Success',
        'Our Patient Journey',
        'Before & After',
        'Happy Moment',
        'Patient Experience',
        'Doctor Care',
        'Treatment Journey',
        'Successful Treatment',
        'Patient Testimonial',
        'Care & Compassion',
        'Transformation Story',
        'Happy Visit',
        'Patient Care'
    ];
    
    // Generate random unique numbers
    const getRandomUniqueNumbers = (count, max) => {
        const numbers = new Set();
        while (numbers.size < count) {
            numbers.add(Math.floor(Math.random() * max) + 1);
        }
        return Array.from(numbers);
    };
    
    // 随机选择照片名称
    const getRandomPhotoNames = (count) => {
        const shuffled = [...photoNames].sort(() => Math.random() - 0.5);
        return shuffled.slice(0, count);
    };
    
    const randomNumbers = getRandomUniqueNumbers(imageCount, maxImageNumber);
    const randomPhotoNames = getRandomPhotoNames(imageCount);
    
    doctorPatientGrid.innerHTML = randomNumbers.map((num, index) => `
        <div class="doctor-patient-card fade-in">
            <img src="images/heying-${num}.jpg" alt="${randomPhotoNames[index]}" class="doctor-patient-image" loading="lazy">
            <div class="doctor-patient-content">
                <h4>${randomPhotoNames[index]}</h4>
            </div>
        </div>
    `).join('');
};

// Render hospital environment images
const renderHospitalEnvironment = () => {
    const hospitalEnvGrid = document.getElementById('hospitalEnvGrid');
    if (!hospitalEnvGrid) return;
    
    const maxImageNumber = 73;
    const imageCount = 6;
    
    // 通用的场景名称列表
    const sceneNames = [
        'Hospital Environment',
        'Clinic Interior',
        'Medical Facility',
        'Professional Environment',
        'Modern Facility',
        'Clean & Comfortable',
        'Our Facility',
        'Hospital Scene',
        'Clinic View',
        'Medical Space',
        'Healthcare Environment',
        'Treatment Facility',
        'Clinical Space',
        'Care Environment',
        'Medical Center',
        'Health Facility'
    ];
    
    // Generate random unique numbers
    const getRandomUniqueNumbers = (count, max) => {
        const numbers = new Set();
        while (numbers.size < count) {
            numbers.add(Math.floor(Math.random() * max) + 1);
        }
        return Array.from(numbers);
    };
    
    // 随机选择场景名称
    const getRandomSceneNames = (count) => {
        const shuffled = [...sceneNames].sort(() => Math.random() - 0.5);
        return shuffled.slice(0, count);
    };
    
    const randomNumbers = getRandomUniqueNumbers(imageCount, maxImageNumber);
    const randomSceneNames = getRandomSceneNames(imageCount);
    
    hospitalEnvGrid.innerHTML = randomNumbers.map((num, index) => `
        <div class="hospital-environment-card fade-in">
            <img src="images/fenyuan-${num}.jpg" alt="${randomSceneNames[index]}" class="hospital-environment-image" loading="lazy">
            <div class="hospital-environment-content">
                <h4>${randomSceneNames[index]}</h4>
            </div>
        </div>
    `).join('');
};

// Copy to clipboard functionality
const initCopyToClipboard = () => {
    const contactMethods = document.querySelectorAll('.contact-method, .contact-method-bottom');
    
    contactMethods.forEach(method => {
        method.style.position = 'relative';
        method.style.cursor = 'pointer';
        
        method.addEventListener('click', async function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const contentElement = this.querySelector('.contact-method-content p, .contact-method-content-bottom p');
            if (!contentElement) return;
            
            const textToCopy = contentElement.textContent.trim();
            
            const showTooltip = () => {
                // Remove any existing tooltips first
                const existingTooltips = document.querySelectorAll('.copy-tooltip');
                existingTooltips.forEach(tip => tip.remove());
                
                const tooltip = document.createElement('div');
                tooltip.className = 'copy-tooltip';
                tooltip.textContent = 'Copied!';
                
                const rect = this.getBoundingClientRect();
                
                // Use fixed positioning for tooltip
                tooltip.style.top = (rect.top - 50) + 'px';
                tooltip.style.left = (rect.left + rect.width / 2) + 'px';
                tooltip.style.transform = 'translateX(-50%)';
                
                document.body.appendChild(tooltip);
                
                setTimeout(() => {
                    if (tooltip.parentNode) {
                        tooltip.remove();
                    }
                }, 2000);
            };
            
            // Try modern clipboard API first
            if (navigator.clipboard && window.isSecureContext) {
                try {
                    await navigator.clipboard.writeText(textToCopy);
                    showTooltip();
                    return;
                } catch (err) {
                    console.log('Modern clipboard failed, trying fallback:', err);
                }
            }
            
            // Fallback: use old execCommand method
            try {
                const textArea = document.createElement('textarea');
                textArea.value = textToCopy;
                textArea.style.position = 'fixed';
                textArea.style.left = '-9999px';
                textArea.style.top = '-9999px';
                textArea.style.opacity = '0';
                textArea.readOnly = true;
                document.body.appendChild(textArea);
                textArea.select();
                textArea.setSelectionRange(0, 999999);
                
                const successful = document.execCommand('copy');
                document.body.removeChild(textArea);
                
                if (successful) {
                    showTooltip();
                }
            } catch (fallbackErr) {
                console.error('All copy methods failed:', fallbackErr);
                // Last resort: alert the text
                alert('Copy this: ' + textToCopy);
            }
        });
    });
};

// 直接简化init函数
function init() {
    navSlide();
    faqAccordion();
    preloader();
    scrollTopButton();
    fadeInOnScroll();
    smoothScrolling();
    renderRandomResults();
    renderDoctorPatientPhotos();
    renderHospitalEnvironment();
    initCasesFilter();
    initCopyToClipboard();
};

// Run initialization when DOM is loaded
document.addEventListener('DOMContentLoaded', init);