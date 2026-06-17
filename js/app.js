import '../css/style.css';

// ── Skills data ────────────────────────────────────────────────────────────
const skillsData = [
{
    category: "Programming Languages (including HTML and CSS)",
    skills: [
      {
        id: "python", label: "Python",
        icon: "python/FFE873", iconColor: "#FFE873",
        chip: "bg-yellow-900/10 text-[#FFE873] border-yellow-800/40",
        links: [
          { type: "project", label: "MoTorch",             target: "project-motorch" },
          { type: "project", label: "Multi-Robot Coverage",  target: "project-mrc" },
          { type: "project", label: "AeroAtlas",             target: "project-aeroatlas" },
          { type: "exp",     label: "App Dev Intern @ FL Blue",  target: "exp-flblue" },
          { type: "exp",     label: "UF Internship @ UFIT",  target: "exp-ufit" },
          { type: "course",  label: "ML Engineering",        target: "edu-unf" },
          { type: "course",  label: "Computer Vision (UF)", target: "edu-uf" },
          { type: "course",  label: "ML w/ Graphs (UNF)",   target: "edu-unf" },
          { type: "course",  label: "Intro to AI (UNF)",    target: "edu-unf" },
        ]
      },
      {
        id: "go", label: "Go",
        icon: "go/00ADD8", iconColor: "#00ADD8",
        chip: "bg-cyan-900/10 text-[#06B6D4] border-cyan-800/40",
        links: [
          { type: "project", label: "UF Marketplace", target: "project-marketplace" },
          { type: "course",  label: "Software Engineering",    target: "edu-uf" },
        ]
      },
      {
        id: "java", label: "Java",
        icon: "openjdk/F8981D", iconColor: "#F8981D",
        chip: "bg-red-900/10 text-[#F8981D] border-red-800/40",
        links: [
          { type: "project", label: "Raspberry Pi Interface", target: "project-rpi" },
          { type: "course", label: "Analysis of Algorithms", target: "edu-uf" },
          { type: "course", label: "Databases", target: "edu-unf" },
        ]
      },
      {
        id: "sql", label: "SQL",
        icon: "postgresql/4169E1", iconColor: "#4169E1",
        chip: "bg-blue-900/20 text-[#4169E1] border-blue-800/40",
        links: [
          { type: "exp",     label: "App Dev Intern @ FL Blue",  target: "exp-flblue" },
          { type: "exp", label: "UF Internship @ UFIT", target: "exp-ufit" },
          { type: "project", label: "UF Marketplace", target: "project-marketplace" },
          { type: "course", label: "Databases", target: "edu-unf"},
        ]
      }, 
      {
        id: "html", label: "HTML",
        icon: "html5/E34F26" , iconColor: "#E34F26",
        chip: "bg-orange-900/10 text-orange-400 border-orange-800/30",
        links: [
          { type: "exp", label: "Web Developer @ AUMC", target: "exp-church" },
          { type: "project", label: "UF Marketplace", target: "project-marketplace" },
          { type: "project", label: "AeroAtlas", target: "project-aeroatlas" },
        ]
      },
      {
        id: "css", label: "CSS",
        icon: "css/663399" , iconColor: "#663399",
        chip: "bg-purple-900/10 text-[#663399] border-purple-800/40",
        links: [
          { type: "exp", label: "Web Developer @ AUMC", target: "exp-church" },
          { type: "project", label: "UF Marketplace", target: "project-marketplace" },
          { type: "project", label: "AeroAtlas", target: "project-aeroatlas" },
          { type: "project", label: "Raspberry Pi Interface", target: "project-rpi" },
        ]
      },
      {
        id: "js", label: "JavaScript",
        icon: "javascript/F7DF1E" , iconColor: "#663399",
        chip: "bg-yellow-900/10 text-[#F7DF1E] border-yellow-900/40",
        links: [
          { type: "exp", label: "Web Developer @ AUMC", target: "exp-church" },
          { type: "project", label: "UF Marketplace", target: "project-marketplace" },
          { type: "project", label: "AeroAtlas", target: "project-aeroatlas" },
        ]
      }
    ]
  },
  {
    category: "Libraries and Frameworks",
    skills: [
      {
        id: "fastapi", label: "FastAPI",
        icon: "fastapi/05998B", iconColor: "#05998B",
        chip: "bg-emerald-900/10 text-[#05998B] border-emerald-800/40",
        links: [
          { type: "project", label: "AeroAtlas", target: "project-aeroatlas" },
          { type: "exp",     label: "App Dev Intern @ FL Blue",  target: "exp-flblue" },
        ]
      },
      {
        id: "django", label: "Django",
        icon: "django/white", iconColor: "white",
        chip: "bg-white/5 text-white border-white/20",
        links: [
          { type: "exp", label: "UF Internship @ UFIT", target: "exp-ufit" },
        ]
      },
      {
        id: "pytorch", label: "PyTorch",
        icon: "pytorch/EE4C2C", iconColor: "#EE4C2C",
        chip: "bg-orange-900/10 text-orange-400 border-orange-800/40",
        links: [
          { type: "project", label: "Multi-Robot Coverage", target: "project-mrc" },
          { type: "course",  label: "Computer Vision (UF)", target: "edu-uf" },
          { type: "course",  label: "ML Engineering (UF)",  target: "edu-uf" },
          { type: "course",  label: "ML w/ Graphs (UNF)",   target: "edu-unf" },
          { type: "course",  label: "Intro to AI (UNF)",    target: "edu-unf" },
        ]
      },
      {
        id: "sklearn", label: "scikit-learn",
        icon: "scikitlearn/F7931E", iconColor: "#F7931E",
        chip: "bg-orange-900/10 text-[#F7931E] border-orange-800/30",
        links: [
          { type: "course", label: "Computer Vision (UF)", target: "edu-uf" },
          { type: "course", label: "ML Engineering (UF)",  target: "edu-uf" },
          { type: "course", label: "ML w/ Graphs (UNF)",   target: "edu-unf" },
          { type: "course", label: "Intro to AI (UNF)",    target: "edu-unf" },
        ]
      },
      {
        id: "gymnasium", label: "Gymnasium",
        icon: "openaigym/white", iconColor: "white",
        chip: "bg-white/5 text-white border-white/20",
        links: [
          { type: "project", label: "Multi-Robot Coverage", target: "project-mrc" },
          { type: "course",  label: "Intro to AI (UNF)",    target: "edu-unf" },
        ]
      },
      {
        id: "tailwind", label: "Tailwind CSS",
        icon: "tailwindcss/06B6D4", iconColor: "#06B6D4",
        chip: "bg-cyan-900/10 text-[#06B6D4] border-cyan-800/40",
        links: [
          { type: "project", label: "AeroAtlas", target: "project-aeroatlas" },
        ]
      },
    ]
  },
  {
    category: "Tools & Infrastructure",
    skills: [
      {
        id: "linux", label: "Linux",
        icon: "linux/FCC624", iconColor: "#FCC624",
        chip: "bg-slate-800/50 text-[#FCC624] border-yellow-600/30",
        links: [
          { type: "exp",     label: "UF Internship @ UFIT",  target: "exp-ufit" },
          { type: "project", label: "Raspberry Pi Interface", target: "project-rpi" },
        ]
      },
      {
        id: "hpc", label: "HPC / Slurm",
        icon: null, iconColor: null,
        chip: "bg-gray-800/50 text-gray-400 border-gray-700",
        links: [
          { type: "exp", label: "UF Internship @ UFIT", target: "exp-ufit" },
        ]
      },
      {
        id: "git", label: "Git",
        icon: "git/F05032", iconColor: "#F05032",
        chip: "bg-red-900/10 text-[#F05032] border-red-800/30",
        links: []
      },
    ]
  },
];

// ── Render skills ──────────────────────────────────────────────────────────
const container = document.getElementById('skills-container');
skillsData.forEach(cat => {
  const section = document.createElement('div');
  section.innerHTML = `
    <p class="text-xs text-gray-600 uppercase tracking-[0.18em] font-bold mb-3 pb-2 border-b border-gray-800">${cat.category}</p>
    <div class="flex flex-wrap gap-2" data-cat></div>
  `;
  const grid = section.querySelector('[data-cat]');
  cat.skills.forEach(skill => {
    const chip = document.createElement('button');
    chip.className = `skill-chip flex items-center gap-1.5 px-3 py-1.5 rounded border text-xs font-bold uppercase transition-all ${skill.chip}`;
    chip.dataset.skillId = skill.id;
    chip.dataset.links = JSON.stringify(skill.links);
    let iconHtml = skill.icon
      ? `<img src="https://cdn.simpleicons.org/${skill.icon}" class="w-3.5 h-3.5" alt="">`
      : `<span class="w-3.5 h-3.5 flex items-center justify-center text-[10px] opacity-50">✦</span>`;
    chip.innerHTML = `${iconHtml}${skill.label}`;
    if (skill.links.length > 0) {
      chip.title = `${skill.links.length} link${skill.links.length > 1 ? 's' : ''}`;
    }
    grid.appendChild(chip);
  });
  container.appendChild(section);
});

// ── Popover logic ──────────────────────────────────────────────────────────
let activeChip = null;
const popover = document.getElementById('skill-popover');
const popoverContent = document.getElementById('popover-content');

function typeLabel(type) {
  if (type === 'project')  return { label: 'Projects',   color: 'text-cyan-500' };
  if (type === 'exp')      return { label: 'Experience',  color: 'text-emerald-500' };
  if (type === 'course')   return { label: 'Coursework',  color: 'text-purple-400' };
  return { label: 'Other', color: 'text-gray-400' };
}

function showPopover(chipEl, links) {
  if (activeChip === chipEl) { hidePopover(); return; }
  if (activeChip) activeChip.classList.remove('active');
  activeChip = chipEl;
  chipEl.classList.add('active');

  if (links.length === 0) {
    popoverContent.innerHTML = `<p class="text-sm text-gray-500 italic">General skill</p>`;
  } else {
    const grouped = {};
    links.forEach(l => {
      if (!grouped[l.type]) grouped[l.type] = [];
      grouped[l.type].push(l);
    });
    let html = '';
    ['project','exp','course'].forEach(type => {
      if (!grouped[type]) return;
      const { label, color } = typeLabel(type);
      html += `<p class="text-xs ${color} uppercase tracking-widest font-bold mb-1.5 mt-2 first:mt-0">${label}</p>`;
      grouped[type].forEach(l => {
        html += `<button onclick="scrollToTarget('${l.target}')" class="block w-full text-left text-sm text-gray-400 hover:text-cyan-400 cursor-pointer py-0.5 transition-colors truncate">↗ ${l.label}</button>`;
      });
    });
    popoverContent.innerHTML = html;
  }

  popover.classList.remove('hidden');
  // Measure after making visible so offsetHeight is correct
  const rect = chipEl.getBoundingClientRect();
  const pw = 224;
  const ph = popover.offsetHeight;
  const margin = 8;
  const spaceBelow = window.innerHeight - rect.bottom;
  const spaceAbove = rect.top;

  // Horizontal: align to chip left, clamp to viewport
  let left = rect.left;
  if (left + pw > window.innerWidth - margin) left = window.innerWidth - pw - margin;
  if (left < margin) left = margin;

  // Vertical: prefer below, flip above if not enough room
  let top;
  if (spaceBelow >= ph + 6 || spaceBelow >= spaceAbove) {
    top = rect.bottom + 6;
  } else {
    top = rect.top - ph - 6;
  }

  popover.style.position = 'fixed';
  popover.style.left = left + 'px';
  popover.style.top  = top  + 'px';
}

function hidePopover() {
  popover.classList.add('hidden');
  if (activeChip) { activeChip.classList.remove('active'); activeChip = null; }
}

function scrollToTarget(targetId) {
  hidePopover();
  const el = document.getElementById(targetId);
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  el.classList.add('scroll-highlight');
  setTimeout(() => el.classList.remove('scroll-highlight'), 1600);
}

window.scrollToTarget = scrollToTarget;

// ── Hamburger menu ─────────────────────────────────────────────────────────
const navToggle = document.getElementById('nav-toggle');
const navMobile = document.getElementById('nav-mobile');

navToggle.addEventListener('click', () => {
  const isOpen = navMobile.classList.toggle('hidden') === false;
  navToggle.classList.toggle('open', isOpen);
});

document.querySelectorAll('.mobile-nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navMobile.classList.add('hidden');
    navToggle.classList.remove('open');
  });
});

document.addEventListener('click', e => {
  const chip = e.target.closest('.skill-chip');
  if (chip) {
    showPopover(chip, JSON.parse(chip.dataset.links));
    return;
  }
  if (!e.target.closest('#skill-popover')) hidePopover();
});

window.addEventListener('scroll', hidePopover, { passive: true });

// ── Active nav link via IntersectionObserver ───────────────────────────────
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id);
      });
    }
  });
}, { rootMargin: '-30% 0px -60% 0px' });

sections.forEach(s => observer.observe(s));
