document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Highlight active navigation item
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('#main-nav a');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });

    //Toggle Mode

    const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.setAttribute('data-theme', 
        document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
    );
    themeToggle.innerHTML = document.body.getAttribute('data-theme') === 'dark' 
        ? '<i class="fas fa-sun"></i>' 
        : '<i class="fas fa-moon"></i>';
});
    
    // Animate progress bars on scroll
    const progressBars = document.querySelectorAll('.progress');
    
    function animateProgressBars() {
        progressBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
        });
    }
    
    // Intersection Observer for animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.id === 'skills') {
                    animateProgressBars();
                }
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
    
    // GitHub Projects - Replace with your actual GitHub projects
    const githubProjects = [
        {
            title: "Calculatrice-(Back-end)",
            description: "Une calculatrice simple (addition, sustraction, multiplication, division).",
            languages: "HTML, CSS, JavaScript,PHP",
            url: "https://projected.alwaysdata.net/calculator-v3/",
            image: "https://www.euroschoolindia.com/blogs/wp-content/uploads/2023/11/school-calculator-buying-guide-jpg.webp" 
        },
        {
            title: "Dictionnaire Animaux-(Back-end)",
            description: "Dictionnaire des cent animaux les plus connues.",
            languages: "HTML, CSS, JavaScript, PHP",
            url: "https://projected.alwaysdata.net/Dictionnary-version3/",
            image: "https://thumbs.dreamstime.com/b/dictionnaire-fran%C3%A7ais-ouvert-sur-une-table-avec-loupe-livre-de-r%C3%A9f%C3%A9rence-d%C3%A9finitions-mots-langue-fran%C3%A7aise-un-objet-optique-236532187.jpg" 
        },
        {
            title: "Website Pyrenees Audoises (Front-end)",
            description: "Une site developpé avec Wordpress.",
            languages: "HTML, CSS, JavaScript, PHP",
            url: "http://luis-eduardo-go.sc2nbnd7186.universe.wf/wordpress_fr/",
            image: "https://www.01net.com/app/uploads/2022/06/Site-vitrine.jpeg" 
        }
        ,
        {
            title: "Application Maison Hantée (Front-End)",
            description: "Application pour aider aux touristes qui visitent la Maison Hantée et le Musée de L'inquisition",
            languages: "HTML, CSS, JavaScript",
            url: "https://pr0jected.github.io/",
            image: "https://media.istockphoto.com/id/481231906/fr/vectoriel/horreur-maison-hant%C3%A9e.jpg?s=612x612&w=0&k=20&c=RqrqbAQYYYFcAAZnPv-8SBu3McCx_j3ZrZzYOLpFXuM=" 
        } 
        ,
        {
            title: "Quiz Developpement(Front-End)",
            description: "Simple Quiz pour tester javascript en action.",
            languages: "HTML, CSS, JavaScript",
            url: "http://luis-eduardo-go.sc2nbnd7186.universe.wf/AF022025/QuizControlDynamique.html",
            image: "https://static.vecteezy.com/ti/vecteur-libre/p1/16061690-logo-de-quiz-avec-symboles-de-bulle-de-parole-concept-de-questionnaire-spectacle-chanter-quiz-vectoriel.jpg" 
        }
        ,
        {
            title: "Mini-Blog (Back-End)",
            description: "En construction...",
            languages: "HTML, CSS, JavaScript, PHP, MariaDB, PHPMYADMIN",
            url: "https://github.com/yourusername/portfolio",
            image: "https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydGZvbGlvfGVufDB8fDB8fHww" // Add this line
        }
    ];
    
    const projectsContainer = document.getElementById('github-projects');
    
    githubProjects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        projectCard.innerHTML = `
        <div class="project-image">
            <img src="${project.image}" alt="${project.title} Screenshot">
        </div>
        <div class="project-info">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="project-links">
                <span>${project.languages}</span>
                <a href="${project.url}" target="_blank">Voir le projet <i class="fas fa-external-link-alt"></i></a>
            </div>
        </div>
    `;
        
        projectsContainer.appendChild(projectCard);
    });
    
    // Deplacement button

    // Back to Top Button
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


// Replace with your actual GitHub username
    const githubLinks = document.querySelectorAll('a[href="https://github.com/Pr0jectEd/"]');
    githubLinks.forEach(link => {
        link.href = "https://github.com/Pr0jectEd/";
    });
});


