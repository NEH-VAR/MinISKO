// script.js
const identifier = document.getElementById('identifier');
const sections = {
  acad: { count: 2, prefix: 'acad' },
  activity: { count: 4, prefix: 'activity' },
  dorm: { count: 2, prefix: 'dorm' },
  sport: { count: 5, prefix: 'sport' }
};
let currentSection = null;
let currentIndex = null;

function updateIdentifier(sectionId, index) {
    if(!sections[sectionId]) return;
  identifier.innerHTML = '';
  const sectionData = sections[sectionId];
  for (let i = 0; i < sectionData.count; i++) {
    const img = document.createElement('img');
    img.src = i === index ? 'images/tour/subsection-dark-filled.svg' : 'images/tour/subsection-dark.svg';
    img.alt = `Subsection ${i + 1}`;
    img.dataset.index = i;
    img.addEventListener('click', () => {
        if(currentSection)
        {
            currentIndex = i;
            updateIdentifier(currentSection, currentIndex);
            const targetElement = document.getElementById(`${sections[currentSection].prefix}-${i+1}`);
            if(targetElement)
            {
                targetElement.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
            }
        }
    });
    identifier.appendChild(img);
  }
    currentSection = sectionId;
    currentIndex = index;
}

function getCurrentSection() {
    let current = null;
    let index = null;
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const viewportCenter = viewportHeight / 2;

    for (const sectionId in sections) {
        const sectionElement = document.getElementById(sectionId);
        if (isElementNearViewportCenter(sectionElement, viewportCenter)) {
            current = sectionId;
            const sectionData = sections[sectionId];
            for(let i = 1; i <= sectionData.count; i++)
            {
                const building = document.getElementById(`${sectionData.prefix}-${i}`);
                if(isElementNearViewportCenter(building, viewportCenter))
                {
                    index = i - 1;
                    break;
                }
            }
            if (index !== null) break;
        }
    }
    return {section: current, index: index};
}

function isElementNearViewportCenter(el, viewportCenter) {
    if (!el) return false;
    const rect = el.getBoundingClientRect();
    const elementCenter = rect.top + rect.height / 2;
    // Check if the element's center is within a reasonable range of the viewport center.
    const threshold = rect.height/2; // Threshold is half of element height
    return Math.abs(elementCenter - viewportCenter) <= threshold;
}

// Add scroll event listener
window.addEventListener('scroll', () => {
    const current = getCurrentSection();
    if (current.section && (current.section !== currentSection || current.index !== currentIndex)) {
        updateIdentifier(current.section, current.index);
    }
});

// Initial setup
const urlParams = new URLSearchParams(window.location.search);
const sectionParam = urlParams.get('section');
const indexParam = urlParams.get('index');

let initialSection = 'acad';
let initialIndex = 0;

if(sectionParam && sections[sectionParam])
{
    initialSection = sectionParam;
}

if(indexParam && !isNaN(parseInt(indexParam)))
{
    initialIndex = parseInt(indexParam);
}

updateIdentifier(initialSection, initialIndex);