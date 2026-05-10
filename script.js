function openConsent(){
    document.getElementById("consentModal").classList.add("show");
}

function closeConsent(){
    document.getElementById("consentModal").classList.remove("show");
}

window.onclick = function(event){
    let modal = document.getElementById("consentModal");
    if(event.target == modal){
        modal.classList.remove("show");
    }
}
const steps = [
    {
        num: "01",
        title: "Patient Registration & Login",
        desc: "Users create an account by entering their name, contact number, and health card details. The onboarding screen uses a clean step-by-step form that reduces drop-off rates.",
        img: "images/PW (1).png"
    },
    {
        num: "02",
        title: "Select Healthcare Services",
        desc: "Patients choose the type of healthcare service they need from available categories.",
        img: "images/PW (2).png"
    },
    {
        num: "03",
        title: "Browse Clinics",
        desc: "Patients browse nearby clinics using filters for specialty, distance, and availability.",
        img: "images/PW (3).png"
    },
    {
        num: "04",
        title: "Book an Appointment",
        desc: "Users select date, time slot, and confirm booking with a summary screen.",
        img: "images/PW (4).png"
    },
    {
        num: "05",
        title: "Receive Queue Number",
        desc: "The system assigns a queue number and shows real-time position and waiting time.",
        img: "images/PW (5).png"
    }
];

let index = 0;

// elements
const stepNum = document.getElementById("stepNum");
const stepTitle = document.getElementById("stepTitle");
const stepDesc = document.getElementById("stepDesc");
const stepImg = document.getElementById("stepImg");

const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

// update function
function updateStep() {
    stepNum.textContent = steps[index].num;
    stepTitle.textContent = steps[index].title;
    stepDesc.textContent = steps[index].desc;
    stepImg.src = steps[index].img;
}

// next
nextBtn.addEventListener("click", () => {
    if (index < steps.length - 1) {
        index++;
        updateStep();
    }
});

// previous
prevBtn.addEventListener("click", () => {
    if (index > 0) {
        index--;
        updateStep();
    }
});


// init
updateStep();


// TASK SUCCESS

new Chart(document.getElementById('taskChart'), {
    type: 'doughnut',
    data: {
        labels: ['Successful', 'Unsuccessful'],
        datasets: [{
            data: [90, 10],
            backgroundColor: ['#4CAF50','#EF5350']
        }]
    }
});

// GENDER

new Chart(document.getElementById('genderChart'), {
    type: 'pie',
    data: {
        labels: ['Female','Male'],
        datasets: [{
            data: [80,20],
            backgroundColor: ['#FF8FAB','#4F8CFF']
        }]
    }
});

// TASK TIME

new Chart(document.getElementById('timeChart'), {
    type: 'bar',
    data: {
        labels: ['<3 mins','3-5 mins','6-10 mins','10+ mins'],
        datasets: [{
            label: 'Participants',
            data: [7,6,5,2],
            backgroundColor: '#4F8CFF'
        }]
    }
});

// EASE

new Chart(document.getElementById('easeChart'), {
    type: 'pie',
    data: {
        labels: ['Very Easy','Easy','Neutral','Difficult'],
        datasets: [{
            data: [3,7,9,1],
            backgroundColor: ['#4CAF50','#8BC34A','#FFC107','#EF5350']
        }]
    }
});

// SUS

new Chart(document.getElementById('susChart'), {
    type: 'radar',
    data: {
        labels: ['Ease of Use','Confidence','Learnability','Complexity'],
        datasets: [{
            label: 'Mean Scores',
            data: [3.9,4.05,4.15,3.4],
            backgroundColor: 'rgba(79,140,255,0.2)',
            borderColor: '#4F8CFF'
        }]
    }
});

document.addEventListener("DOMContentLoaded", function () {

    const TEAL = '#1a73e8';
    const TEAL2 = '#4293f5';
    const NAVY = '#152238';
    const AMBER = '#f59e0b';
    const ROSE = '#e53935';
    const GREEN = '#00875a';
    const INDIGO = '#7c4dff';

    // Gender
    new Chart(document.getElementById('genderChart'), {
        type: 'doughnut',
        data: {
            labels: ['Female', 'Male'],
            datasets: [{
                data: [16, 4],
                backgroundColor: [TEAL, INDIGO],
                borderWidth: 0
            }]
        },
        options: {
            plugins: { legend: { position: 'bottom' } },
            cutout: '65%'
        }
    });

    // Age
    new Chart(document.getElementById('ageChart'), {
        type: 'bar',
        data: {
            labels: ['Age 20', 'Age 21', 'Age 22', 'Age 23'],
            datasets: [{
                data: [3, 13, 2, 2],
                backgroundColor: [TEAL2, TEAL, INDIGO, AMBER],
                borderRadius: 6
            }]
        },
        options: {
            plugins: { legend: { display: false } },
            scales: {
                y: { beginAtZero: true },
                x: { grid: { display: false } }
            }
        }
    });

    // Experience
    new Chart(document.getElementById('expChart'), {
        type: 'doughnut',
        data: {
            labels: ['Has Prior Experience', 'No Prior Experience'],
            datasets: [{
                data: [12, 8],
                backgroundColor: [TEAL, '#e2e8f0'],
                borderWidth: 0
            }]
        },
        options: {
            plugins: { legend: { position: 'bottom' } },
            cutout: '65%'
        }
    });

    // Tech use
    new Chart(document.getElementById('techChart'), {
        type: 'bar',
        data: {
            labels: ['Daily', 'Weekly'],
            datasets: [{
                data: [16, 4],
                backgroundColor: [TEAL, INDIGO],
                borderRadius: 6
            }]
        },
        options: {
            plugins: { legend: { display: false } },
            scales: {
                y: { beginAtZero: true },
                x: { grid: { display: false } }
            }
        }
    });

    // Task success
    new Chart(document.getElementById('successChart'), {
        type: 'doughnut',
        data: {
            labels: ['Completed', 'Not Completed'],
            datasets: [{
                data: [18, 2],
                backgroundColor: [GREEN, ROSE],
                borderWidth: 0
            }]
        },
        options: {
            plugins: { legend: { position: 'bottom' } },
            cutout: '65%'
        }
    });

    // Time on task
    new Chart(document.getElementById('timeChart'), {
        type: 'bar',
        data: {
            labels: ['<3 min', '3–5 min', '6–10 min', '>10 min'],
            datasets: [{
                data: [7, 6, 5, 2],
                backgroundColor: [GREEN, TEAL, AMBER, ROSE],
                borderRadius: 6
            }]
        },
        options: {
            plugins: { legend: { display: false } },
            scales: {
                y: { beginAtZero: true },
                x: { grid: { display: false } }
            }
        }
    });

});

