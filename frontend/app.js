const API_BASE = '/api';

// DOM Elements
const heroName = document.getElementById('heroName');
const heroTitle = document.getElementById('heroTitle');
const heroAvatar = document.getElementById('heroAvatar');
const polaroidImg1 = document.getElementById('polaroidImg1');
const polaroidImg2 = document.getElementById('polaroidImg2');
const aboutImg1 = document.getElementById('aboutImg1');
const aboutImg2 = document.getElementById('aboutImg2');
const footerAvatar = document.getElementById('footerAvatar');
const ribbonTicker = document.getElementById('ribbonTicker');

const aboutStory = document.getElementById('aboutStory');
const aboutHighlights = document.getElementById('aboutHighlights');
const aboutWorkStyle = document.getElementById('aboutWorkStyle');
const aboutMotto = document.getElementById('aboutMotto');

const servicesGrid = document.getElementById('servicesGrid');
const experienceTimeline = document.getElementById('experienceTimeline');
const educationBox = document.getElementById('educationBox');
const skillsContainer = document.getElementById('skillsContainer');
const projectsGrid = document.getElementById('projectsGrid');

const contactPhone = document.getElementById('contactPhone');
const contactEmail = document.getElementById('contactEmail');
const contactAddress = document.getElementById('contactAddress');
const contactForm = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const toastMsg = document.getElementById('toastMsg');

// Toast notification helper
function showToast(message, type = 'success') {
  toastMsg.textContent = message;
  toastMsg.className = `toast-msg show ${type}`;
  setTimeout(() => {
    toastMsg.className = 'toast-msg';
  }, 4000);
}

// Fetch all portfolio data from Backend API
async function loadPortfolioData() {
  try {
    const res = await fetch(`${API_BASE}/portfolio`);
    const result = await res.json();
    if (!result.success) throw new Error(result.message);

    const data = result.data;
    renderProfile(data.profile);
    renderIntro(data.intro);
    renderServices(data.services);
    renderExperience(data.experience);
    renderEducation(data.education);
    renderSkills(data.skills);
    renderProjects(data.projects);
  } catch (error) {
    console.warn('API error or server offline, using local fallback data:', error);
  }
}

// 1. Render Profile Header & Contact Info
function renderProfile(profile) {
  if (!profile) return;
  heroName.textContent = profile.name;
  heroTitle.textContent = profile.title;
  if (profile.avatarHero && heroAvatar) heroAvatar.src = profile.avatarHero;
  if (profile.avatarPolaroid1 && polaroidImg1) polaroidImg1.src = profile.avatarPolaroid1;
  if (profile.avatarPolaroid2 && polaroidImg2) polaroidImg2.src = profile.avatarPolaroid2;
  if (profile.avatarIntro1 && aboutImg1) aboutImg1.src = profile.avatarIntro1;
  if (profile.avatarIntro2 && aboutImg2) aboutImg2.src = profile.avatarIntro2;
  if (profile.avatarFooter && footerAvatar) footerAvatar.src = profile.avatarFooter;
  if (profile.bannerText && ribbonTicker) ribbonTicker.textContent = `${profile.bannerText} • ${profile.bannerText}`;

  contactPhone.textContent = profile.phone;
  contactEmail.textContent = profile.email;
  contactAddress.textContent = profile.address;
}

// 2. Render About Intro
function renderIntro(intro) {
  if (!intro) return;
  aboutStory.textContent = intro.aboutMe;
  aboutWorkStyle.textContent = intro.workStyle;
  aboutMotto.textContent = `"${intro.motto}"`;

  aboutHighlights.innerHTML = intro.highlights
    .map(item => `<li>${item}</li>`)
    .join('');
}

// 3. Render Services: TÔI LÀM GÌ
function renderServices(services) {
  if (!services) return;
  servicesGrid.innerHTML = services.map(srv => `
    <div class="service-card">
      <div class="service-icon-wrap">
        <i class="fa-solid ${srv.icon || 'fa-star'}"></i>
      </div>
      <span class="service-tag">${srv.tag}</span>
      <h4>${srv.title}</h4>
      <p>${srv.desc}</p>
    </div>
  `).join('');
}

// 4. Render Experience Timeline
function renderExperience(experience) {
  if (!experience) return;
  experienceTimeline.innerHTML = experience.map(exp => `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-year">${exp.year}</div>
      <div class="timeline-role">${exp.role}</div>
      <div class="timeline-company">${exp.company}</div>
      <div class="timeline-desc">${exp.desc}</div>
    </div>
  `).join('');
}

// 5. Render Education & Certificates
function renderEducation(edu) {
  if (!edu) return;
  let certHtml = edu.certs.map(c => `
    <li style="margin-bottom: 8px; display: flex; align-items: flex-start; gap: 8px; font-size: 0.92rem;">
      <i class="fa-solid fa-certificate" style="color: var(--primary-color); margin-top: 4px;"></i>
      <span>${c}</span>
    </li>
  `).join('');

  educationBox.innerHTML = `
    <div style="margin-bottom: 20px;">
      <h4 style="font-size: 1.05rem; font-weight: 700; color: var(--text-dark);">${edu.degree}</h4>
      <p style="color: var(--primary-color); font-weight: 500; font-size: 0.95rem;">${edu.school}</p>
    </div>
    <div style="font-weight: 700; margin-bottom: 12px; font-size: 0.95rem; color: var(--accent-gold);">CHỨNG CHỈ TIÊU BIỂU</div>
    <ul style="list-style: none;">
      ${certHtml}
    </ul>
  `;
}

// 6. Render Skills with Animated Progress Bars
function renderSkills(skills) {
  if (!skills) return;

  function renderGroup(title, list) {
    return `
      <div class="skill-group">
        <div class="skill-group-title">${title}</div>
        ${list.map(s => `
          <div class="skill-item">
            <div class="skill-header">
              <span>${s.name}</span>
              <span>${s.percent}%</span>
            </div>
            <div class="skill-bar-bg">
              <div class="skill-bar-fill" style="width: ${s.percent}%;"></div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  skillsContainer.innerHTML = 
    renderGroup('Kỹ năng chuyên môn', skills.hardSkills) +
    renderGroup('Kỹ năng mềm', skills.softSkills);
}

// 7. Render Projects: DỰ ÁN NỔI BẬT
function renderProjects(projects) {
  if (!projects) return;
  projectsGrid.innerHTML = projects.map(p => `
    <div class="project-card">
      <div class="project-thumbnail">
        <img src="${p.image}" alt="${p.title}">
        <span class="project-tag">${p.category}</span>
        ${p.mockupBadge ? `<div class="project-mockup-badge">${p.mockupBadge}</div>` : ''}
      </div>
      <div class="project-body">
        <div>
          <h4 class="project-title">${p.title}</h4>
          <p class="project-desc">${p.desc}</p>
        </div>
        <div class="project-metrics">
          <div class="metric-item">
            <label>Lượt tiếp cận</label>
            <span>${p.views}</span>
          </div>
          <div class="metric-item" style="text-align: right;">
            <label>Hiệu quả</label>
            <span>${p.conversions}</span>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

// Handle Contact Form Submit (sends to Backend)
contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const message = document.getElementById('message').value.trim();

  submitBtn.disabled = true;
  submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Đang gửi...';

  try {
    const res = await fetch(`${API_BASE}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, phone, message })
    });

    const result = await res.json();
    if (result.success) {
      showToast(result.message, 'success');
      contactForm.reset();
    } else {
      showToast(result.message || 'Có lỗi xảy ra, vui lòng thử lại', 'error');
    }
  } catch (error) {
    showToast('Lỗi kết nối tới Backend server!', 'error');
  } finally {
    submitBtn.disabled = false;
    submitBtn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Gửi Tin Nhắn';
  }
});

// Init on load
document.addEventListener('DOMContentLoaded', () => {
  loadPortfolioData();
});
