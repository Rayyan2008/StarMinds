// Ensure script is loaded
console.log("Script loaded!");

// Tab Navigation
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
        console.log("Tab clicked:", tab.innerText);
        
        // Remove active class from all tabs and screens
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));

        // Activate clicked tab and corresponding screen
        tab.classList.add('active');
        document.getElementById(tab.getAttribute('data-screen')).classList.add('active');
    });
});

// Modal handling
function openModal(modalId) {
    console.log("Opening modal:", modalId);
    document.getElementById(modalId).classList.add('active');
}

function closeAllModals() {
    console.log("Closing all modals");
    document.querySelectorAll('.modal').forEach(modal => {
        modal.classList.remove('active');
    });
}

// Close modals when clicking the X button
document.querySelectorAll('.close-modal').forEach(button => {
    button.addEventListener('click', closeAllModals);
});

// Close modals when clicking outside the content
document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', event => {
        if (event.target === modal) {
            closeAllModals();
        }
    });
});

// Check if elements exist before adding event listeners
document.getElementById('show-activity-detail')?.addEventListener('click', () => {
    openModal('activity-detail-modal');
});

document.getElementById('show-new-goal')?.addEventListener('click', () => {
    openModal('new-goal-modal');
});

document.getElementById('show-onboarding')?.addEventListener('click', () => {
    openModal('onboarding-modal');
});
